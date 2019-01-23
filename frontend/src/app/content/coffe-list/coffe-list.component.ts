import { Component, OnInit } from '@angular/core';
import {  CoffeeService } from 'src/app/services/coffee.service';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';
import { LabelType, Options } from 'ng5-slider';


@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.css']
})
export class CoffeListComponent implements OnInit {
  private coffeeList:any;
  loading:boolean= true;
  private minimalna:number;
  private maksymalna:number;
   min;
   max;
  minValue: number = 100;
  maxValue: number = 300;
  options: Options = {
    floor: this.min,
    ceil: this.max,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:{
          this.minimalna=value;
          return '<b>Min Cena:</b> ' + value + 'zł';
        }
        case LabelType.High:{
          this.maksymalna=value;
          return '<b>Max Cena:</b> ' + value + 'zł';
        }
        default:
          return '';
      }
      }
  };
 
 


  constructor(private router: Router, private serv: CoffeeService ) { }

  ngOnInit() {
    this.max=0;
    this.min=10000;
    this.serv.getCoffeeList().subscribe(
      elem=> this.coffeeList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
    for( let coffee of this.coffeeList){
      if(coffee.price>this.max){
        this.max= coffee.price
      }
      if(coffee.price<this.min){
        this.min= coffee.price
      }
    }
  }

  policz(){

    this.serv.filter("price",this.minimalna,this.maksymalna).subscribe(
      elem=> this.coffeeList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
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

  setSelected() {
    this.loading=true;
    let e = (document.getElementById("sortDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    this.serv.sort(opt.value).subscribe(
      elem=> this.coffeeList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }

}
