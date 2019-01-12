import { Component, OnInit } from '@angular/core';
import { COFFEE } from 'src/app/statics/mCoffee';
import { Coffee } from 'src/app/statics/coffe';

@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.css']
})
export class CoffeListComponent implements OnInit {
  private coffeeList:Coffee[]= COFFEE;
  constructor() { }

  ngOnInit() {
  }

}
