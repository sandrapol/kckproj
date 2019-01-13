import { COFFEE } from 'src/app/statics/mCoffee';
import { Coffee } from 'src/app/statics/coffe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newCoffee:Coffee[]=COFFEE.filter(elem=>elem.id<9);;
  constructor() { }

  ngOnInit() {
  }

}
