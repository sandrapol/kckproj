import {  CoffeeService } from 'src/app/statics/mCoffee';
import { Coffee } from 'src/app/statics/coffe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private cofServ= new CoffeeService();
  newCoffee:Coffee[]=this.cofServ.CoffeeList.filter(elem=>elem.id<9);;
  constructor() { }

  ngOnInit() {
  }

}
