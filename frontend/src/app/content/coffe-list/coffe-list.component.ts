import { Component, OnInit } from '@angular/core';
import {  CoffeeService } from 'src/app/statics/mCoffee';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.css']
})
export class CoffeListComponent implements OnInit {
  private cofServ= new CoffeeService();
  private coffeeList:Coffee[]= this.cofServ.CoffeeList;
  constructor(private router: Router, ) { }

  ngOnInit() {
  }
  showDetails(id:number){
    this.router.navigateByUrl("/details/"+id);
  }

}
