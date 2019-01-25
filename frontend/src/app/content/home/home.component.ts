

import { Coffee } from 'src/app/statics/coffe';
import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //private cofServ= new CoffeeService();
  newCoffee;//this.cofServ.CoffeeList.filter(elem=>elem.id<9);;
  constructor(private serv: CoffeeService) { }

  ngOnInit() {
this.serv.getCoffeeList().subscribe(
  elem=>this.newCoffee=elem,
  err=> console.log(err)
)
  }

}
