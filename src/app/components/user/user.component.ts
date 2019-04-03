import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/shared/entities/user';

@Component({
  selector: 'comp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  public data: IUser

  constructor() {
    this.data = {
      name: "",
      credits: [{
        registerDate: new Date()
      },{
        registerDate: new Date()
      }]
    }
  }

  ngOnInit() {

  }
}
