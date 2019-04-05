import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/shared/entities/user';
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

        for (var i in result) {
          let item = result[i];
          let user = <IUser>item.payload.val();
          user.$key = item.key;

          let total = 0;
          let arrayCredits = [];

          for (var index in  user.credits) {
            let credit =  user.credits[index];
            credit.$key = index;
            arrayCredits.push(credit);
          }
    
          arrayCredits.forEach(value => {
            if (value.state)
              total += value.amount;
          });

          this.amount = environment.totalAvailable - total;
        }
      });
  }

  ngOnInit() {
  }

}
