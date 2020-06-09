import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deshboard-card',
  templateUrl: './deshboard-card.component.html',
  styleUrls: ['./deshboard-card.component.css']
})
export class DeshboardCardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('totalConfirmed')
  totalConfirmed;
  // tslint:disable-next-line:no-input-rename
  @Input('totalDeaths')
  totalDeaths;
  // tslint:disable-next-line:no-input-rename
  @Input('totalActive')
  totalActive;
  // tslint:disable-next-line:no-input-rename
  @Input('totalRecovered')
  totalRecovered;
  constructor() { }

  ngOnInit(): void {
  }

}
