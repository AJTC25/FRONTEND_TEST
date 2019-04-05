import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { IUser } from 'src/app/shared/entities/user';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'comp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UserComponent implements OnInit {

  public data: IUser

  constructor(private service: UserService) {
    this.data = {
      name: '',
      createdDate: 0,
      email: '',
    }
  }

  ngOnInit() {

  }

  blurName() {
    this.service.get()
      .subscribe(result => {
        let arrayUsers = [];

        for (var i in result) {
          let item = result[i];
          let user = <IUser>item.payload.val();
          user.$key = item.key;
          arrayUsers.push(user);
        }
        var usersExists = arrayUsers.filter(value => value.identification == this.data.identification);

        if (usersExists.length > 0) {
          this.data = usersExists[0];
        }
      });
  }
}
