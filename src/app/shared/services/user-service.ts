import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { IUser } from '../entities/user';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    list: AngularFireList<any>;

    constructor(private db: AngularFireDatabase) {

        this.list = this.db.list('user-list');
    }   // Inject AngularFireDatabase dependency in constructor

    GetList(): Observable<any> {
        return this.list.valueChanges();

    }

    // Create User
    Add(user: IUser): Promise<any> {
        
        let data = <IUser>{
            name: user.name,
            credits: user.credits
        };

        return this.list.push(data)
            .then(result => {
                return result.toJSON();
            });
    }
}