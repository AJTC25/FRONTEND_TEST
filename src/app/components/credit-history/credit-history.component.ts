import { Component, OnInit, Input } from '@angular/core';
import { ICredit } from 'src/app/shared/entities/credit';

@Component({
  selector: 'credit-history',
  templateUrl: './credit-history.component.html',
  styleUrls: ['./credit-history.component.less']
})
export class CreditHistoryComponent implements OnInit {

  @Input()
  list: ICredit[];

  constructor() { }

  ngOnInit() {
  }

}
