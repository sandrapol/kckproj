import { CoffeeService } from 'src/app/services/coffee.service';
import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee-add',
  templateUrl: './coffee-add.component.html',
  styleUrls: ['./coffee-add.component.css']
})
export class CoffeeAddComponent implements OnInit {
  coffee:Coffee= new Coffee();
  error:boolean;
  constructor(private router: Router, private serv:CoffeeService) { }

  ngOnInit() {
  }
  setName(value) {
    this.coffee.name = value;
    this.error = false;
    if (this.coffee.name.length < 1)
      this.error = true;
  }
  setSpecies(value){
    this.coffee.species=value;
    this.error=false;
    if(this.coffee.species.length<1)
    this.error=true;
  }
  setType(value){
    this.coffee.type=value;
    this.error=false;
    if(this.coffee.type.length<1)
    this.error=true;
  }
  setPrice(value){
    if (Number(value) > -1) {
      this.coffee.price = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }

  setParam(value,header){
    if(Number(value)>0){
    this.coffee.price=Number(value);
    this.error=false;
    }
    else
    this.error=true;
  }
  submit(){
    if (!this.error) {
      this.serv.addCoffee(this.coffee).subscribe(
        elem=>console.log(elem),
        err=>console.log(err),
        ()=> this.router.navigateByUrl("/coffee")
      );
     
    }
  }
}
