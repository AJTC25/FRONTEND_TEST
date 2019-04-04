import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { IUser } from '../entities/user';
import { Credit } from '../entities/credit';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    list: AngularFireList<any>;

    constructor(private db: AngularFireDatabase) {
        this.list = this.db.list('user-list');
    }

    GetList(): Observable<any> {
        return this.list.valueChanges();
    }

    Add(user: IUser, amount: number): Promise<any> {

        let data = <IUser>{
            identificacion: user.identificacion,
            name: user.name,
            registerDate: new Date(),
            email: user.email
        };

        return this.list.push(data)
            .then(result => {
                let key = result.key;
                this.db.list(`user-list/${key}/credits`).push(<Credit>{
                    registerDate: new Date(),
                    amount: amount,
                    paymentDate: null,
                    state: true,
                    payment: false
                });

                return result.toJSON();
            });
    }
}