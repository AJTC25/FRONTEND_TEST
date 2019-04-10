import { Component, OnInit, ViewChild } from '@angular/core';

import { IUser } from 'src/app/shared/entities/user';
import { UserComponent } from 'src/app/components/user/user.component';
import { UserService } from 'src/app/shared/services/user-service';
import { AmountComponent } from 'src/app/components/amount/amount.component';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BaseAmountComponent } from 'src/app/components/base-amount/base-amount.component';

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

  @ViewChild(BaseAmountComponent)
  componentBaseAmount: BaseAmountComponent;

  constructor(private serviceUser: UserService, private router: Router) { }

  ngOnInit() {
  }

  clickSave() {
    let amount = this.componentAmount.amount;
    if (amount >= 100000 && amount <= 1000000) {
      this.componentUser.destroySubscription();
      this.serviceUser.push(this.componentUser.data, amount)
        .then(result => {
          let message = result ? 'Su préstamo fue aprobado' : '¡Lo sentimos pero su préstamo no pudo ser aprobado!';
          
          alert(message);
          this.router.navigate(['/']);
        });
    } else {
      alert('Valor del prestamo invalido debe estar entre  $100,000 y $1,000,000');
    }
  }

  clickCancel() {
    this.router.navigate(['/']);
  }
}
