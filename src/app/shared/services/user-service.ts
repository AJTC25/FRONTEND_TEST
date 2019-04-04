import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { IUser } from '../entities/user';
import { ICredit } from '../entities/credit';

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
        let fecha = this.dateToString(new Date()).toString();

        let data = <IUser>{
            identificacion: user.identificacion,
            name: user.name,
            createdDate: fecha,
            email: user.email
        };

        debugger;
        return this.list.push(data)
            .then(result => {
                let key = result.key;
                this.db.list(`user-list/${key}/credits`).push(<ICredit>{
                    createdDate: fecha,
                    amount: amount,
                    paymentDate: null,
                    state: true,
                    payment: false
                });

                return result.toJSON();
            });
    }

    dateToString(value) :string {
        if (value) {
            var fecha = new Date(value);
            var yyyy = fecha.getFullYear().toString();
            var mm = (fecha.getMonth() + 1).toString();
            var dd = fecha.getDate().toString();
            return (dd[1] ? dd : "0" + dd[0]) + '/' + (mm[1] ? mm : "0" + mm[0]) + '/' + yyyy;
        }
        else
            return null;
    }
}