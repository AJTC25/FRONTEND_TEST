import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/entities/user';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.less']
})
export class CreditListComponent implements OnInit {
  public listItems: IUser[] = [];
  public search: string = '';

  constructor(private service: UserService) {

  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.get()
      .subscribe(result => {
        let arrayUsers = [];

        for (var i in result) {
          let item = result[i];
          let user = <IUser>item.payload.val();
          user.$key = item.key;
          arrayUsers.push(user);
        }

        this.listItems = <IUser[]>arrayUsers;
      });
  }
}
