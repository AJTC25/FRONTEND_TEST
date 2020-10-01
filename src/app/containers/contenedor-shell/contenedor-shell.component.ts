import { Component, OnInit } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contenedor-shell',
  templateUrl: './contenedor-shell.component.html',
  styleUrls: ['./contenedor-shell.component.scss']
})
export class ContenedorShellComponent implements OnInit {
  money = faMoneyBill;
  constructor() { }

  ngOnInit(): void {
  }

}
