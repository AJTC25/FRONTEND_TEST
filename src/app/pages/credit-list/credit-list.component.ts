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

  constructor(private service: UserService) {

  }

  ngOnInit() {
    let datos = this.service.GetList()
      .subscribe(result => {
        this.listItems = <IUser[]>result;
      });
  }

}
