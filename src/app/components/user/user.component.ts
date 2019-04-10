import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { IUser } from 'src/app/shared/entities/user';
import { UserService } from 'src/app/shared/services/user-service';
import { CreditService } from 'src/app/shared/services/credit-service';
import { ICredit } from 'src/app/shared/entities/credit';
import { Subscription } from 'rxjs';

@Component({
  selector: 'comp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UserComponent implements OnInit {

  public data: IUser
  public subscriptionUser: Subscription;
  public subscriptionCredit: Subscription;

  constructor(private service: UserService, private serviceCredit: CreditService) {
    this.data = {
      name: '',
      createdDate: 0,
      email: '',
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.destroySubscription();
  }

  public destroySubscription() {
    if (this.subscriptionUser)
      this.subscriptionUser.unsubscribe();
    if (this.subscriptionCredit)
      this.subscriptionCredit.unsubscribe();
  }

  blurIdentification() {
    if (this.data.identification) {
      this.subscriptionUser = this.service.get()
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

            let user = usersExists[0];
            this.subscriptionCredit = this.serviceCredit
              .getByUser(user.$key)
              .subscribe(resultCredit => {
                let notExistPayment = false;
                let existRejected = false;

                if (resultCredit) {
                  resultCredit.forEach(element => {
                    let credit = <ICredit>element.payload.val();
                    if (credit.state && !credit.payment)
                      notExistPayment = true;
                    else if (!credit.state)
                      existRejected = true;
                  });
                }

                if (notExistPayment || existRejected) {

                  let message = '';

                  if (notExistPayment)
                    message = 'pendiente por pagar';
                  else if (existRejected)
                    message = 'rechazado';

                  if (this.data.identification)
                    alert(`La cédula ingresada tiene un credito ${message}, por favor ingrese otra cédula`);

                  this.data = {
                    name: '',
                    createdDate: 0,
                    email: '',
                  }
                }
                else
                  this.data = user;
              });
          }
        });
    }
  }

}
