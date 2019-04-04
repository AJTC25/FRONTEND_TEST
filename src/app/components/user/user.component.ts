import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { IUser } from 'src/app/shared/entities/user';

@Component({
  selector: 'comp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class UserComponent implements OnInit {

  public data: IUser

  constructor() {
    this.data = {
      identificacion: 0,
      name: '',
      registerDate: new Date(),
      email: '',
    }
  }

  ngOnInit() {

  }
}
