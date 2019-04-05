import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { IUser } from '../entities/user';
import { ICredit } from '../entities/credit';
import { CreditService } from './credit-service';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    list: AngularFireList<any>;

    constructor(private db: AngularFireDatabase, private serviceCredit: CreditService) {
        this.list = this.db.list('user-list');
    }

    get(): Observable<any> {
        return this.list.snapshotChanges();
    }

    push(user: IUser, amount: number): Promise<any> {
        let fecha = new Date().getTime();
        if (!user.$key) {
            let data = <IUser>{
                identification: user.identification,
                name: user.name,
                createdDate: fecha,
                email: user.email
            };

            return this.list.push(data)
                .then(result => {
                    let key = result.key;

                    this.serviceCredit.push(key, amount, true);

                    return result.toJSON();
                });
        }
        else {

            let arrayBoolean = [true, false, true, true, false, true, false, false, true, false];
            let random = arrayBoolean[Math.floor(Math.random() * 10)];

            return this.list
                .update(user.$key,
                    {
                        name: user.name,
                        email: user.email
                    })
                .then(result => {
                    this.serviceCredit.push(user.$key, amount, random);
                    return random;
                });
        }

    }

}