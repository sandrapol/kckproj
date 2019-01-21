import { Component, OnInit } from '@angular/core';
import {  CoffeeService } from 'src/app/services/coffee.service';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.css']
})
export class CoffeListComponent implements OnInit {
  private coffeeList:any;
  loading:boolean= true;

  constructor(private router: Router, private serv: CoffeeService ) { }

  ngOnInit() {
    this.serv.getCoffeeList().subscribe(
      elem=> this.coffeeList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
  }
  showDetails(id:number){
    this.router.navigateByUrl("/details/"+id);
  }

  delete(id:number){
    this.loading=true;
    this.serv.delete(id).subscribe(
      elem=> this.coffeeList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }

}
