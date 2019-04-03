import { Component, OnInit, ViewChild } from '@angular/core';

import { IUser } from 'src/app/shared/entities/user';
import { UserComponent } from 'src/app/components/user/user.component';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'page-register',
  templateUrl: './credit-register.component.html',
  styleUrls: ['./credit-register.component.less']
})
export class CreditRegisterComponent implements OnInit {

  @ViewChild(UserComponent)
  componentUser: UserComponent;

  constructor(private serviceUser: UserService) { }

  ngOnInit() {

  }

  clickSave() {
    this.serviceUser.Add(this.componentUser.data);
  }
}
