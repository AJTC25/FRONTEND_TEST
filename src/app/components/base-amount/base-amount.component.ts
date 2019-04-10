import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { IUser } from 'src/app/shared/entities/user';
import { ICredit } from 'src/app/shared/entities/credit';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'base-amount',
  templateUrl: './base-amount.component.html',
  styleUrls: ['./base-amount.component.less']
})
export class BaseAmountComponent implements OnInit {
  public amount: number;

  constructor(private service: UserService) {
    this.amount = environment.totalAvailable;
    this.service.get()
      .subscribe(result => {
        let total = 0;
        for (var i in result) {
          let item = result[i];
          let user = <IUser>item.payload.val();
          user.$key = item.key;

          let arrayCredits: ICredit[] = [];
          let existsRejected = false;

          for (var index in user.credits) {
            let credit = user.credits[index];
            credit.$key = index;

            if (credit.state && !credit.payment)
              arrayCredits.push(credit);
            else if (!credit.state)
              existsRejected = true;
          }
          if(!existsRejected)
          {
            arrayCredits.forEach(value => {
              total += value.amount;
            });
          }
        }
        this.amount = environment.totalAvailable - total;
      });
  }

  ngOnInit() {
  }

}
