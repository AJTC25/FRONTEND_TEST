import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/shared/entities/user';
import { ICredit } from 'src/app/shared/entities/credit';
import { CreditService } from 'src/app/shared/services/credit-service';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {

  @Input()
  data: IUser;

  public showHistory: boolean;
  public listCredits: ICredit[] = [];

  public lastCredit: ICredit;

  constructor(private serviceCredit: CreditService) {
    this.showHistory = false;
  }

  ngOnInit() {
    this.load();
  }

  load() {
    if (this.data && this.data.credits) {
      let arrayCredits = [];

      for (var i in this.data.credits) {
        let credit = this.data.credits[i];
        credit.$key = i;
        arrayCredits.push(credit);
      }

      this.lastCredit = arrayCredits.sort(function (a, b) {
        return a.createdDate - b.createdDate;
      })[arrayCredits.length - 1];

      this.listCredits = arrayCredits;
    }
  }

  clickPayment() {
    this.serviceCredit.putPayment(this.data.$key, this.lastCredit.$key, true);
  }
}
