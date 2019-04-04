import { Component, OnInit, ViewChild } from '@angular/core';

import { IUser } from 'src/app/shared/entities/user';
import { UserComponent } from 'src/app/components/user/user.component';
import { UserService } from 'src/app/shared/services/user-service';
import { AmountComponent } from 'src/app/components/amount/amount.component';
import { Router } from '@angular/router';

@Component({
  selector: 'page-register',
  templateUrl: './credit-register.component.html',
  styleUrls: ['./credit-register.component.less']
})
export class CreditRegisterComponent implements OnInit {

  @ViewChild(UserComponent)
  componentUser: UserComponent;

  @ViewChild(AmountComponent)
  componentAmount: AmountComponent;

  constructor(private serviceUser: UserService, private router: Router) { }

  ngOnInit() {

  }

  clickSave() {
    this.serviceUser.Add(this.componentUser.data, this.componentAmount.amount)
      .then(result => {
        this.router.navigate(['/']);
      });
  }

  clickCancel(){
    this.router.navigate(['/']);
  }
}
