import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IUser } from '../entities/user';
import { ICredit } from '../entities/credit';
import { CreditService } from './credit-service';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor( private serviceCredit: CreditService) {
    }

    get(): Observable<any> {
        return of();
    }

    push(user: IUser, amount: number): Promise<any> {
        return null;

    }

}