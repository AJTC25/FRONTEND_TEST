import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/shared/entities/user';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {

  @Input()
  data: IUser;

  constructor() { }

  ngOnInit() {
  }
}
