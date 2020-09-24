import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IUser } from '../entities/user';
import { ICredit } from '../entities/credit';

@Injectable({
    providedIn: 'root'
})

export class CreditService {
    constructor() {
    }

    push(keyUser: string, amount: number, stateValue: boolean): Promise<any> {
        return null;
        // let fecha = new Date().getTime();

        // return this.db.list(`user-list/${keyUser}/credits`).push(<ICredit>{
        //     createdDate: fecha,
        //     amount: amount,
        //     paymentDate: null,
        //     state: stateValue,
        //     payment: false
        // });
    }

    putPayment(keyUser: string, key: string, paymentValue: boolean) {
        // this.db.list(`user-list/${keyUser}/credits`)
        //     .update(key,
        //         {
        //             payment: paymentValue
        //         });
    }

    getByUser(keyUser: string): Observable<any> {
        return of();
        // return this.db.list(`user-list/${keyUser}/credits`)
        //     .snapshotChanges();
    }
}