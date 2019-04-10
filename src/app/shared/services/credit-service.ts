import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { IUser } from '../entities/user';
import { ICredit } from '../entities/credit';

@Injectable({
    providedIn: 'root'
})

export class CreditService {
    constructor(private db: AngularFireDatabase) {
    }

    push(keyUser: string, amount: number, stateValue: boolean): Promise<any> {
        let fecha = new Date().getTime();

        return this.db.list(`user-list/${keyUser}/credits`).push(<ICredit>{
            createdDate: fecha,
            amount: amount,
            paymentDate: null,
            state: stateValue,
            payment: false
        });
    }

    putPayment(keyUser: string, key: string, paymentValue: boolean) {
        this.db.list(`user-list/${keyUser}/credits`)
            .update(key,
                {
                    payment: paymentValue
                });
    }

    getByUser(keyUser: string): Observable<any> {
        return this.db.list(`user-list/${keyUser}/credits`)
        .snapshotChanges();
    }
}