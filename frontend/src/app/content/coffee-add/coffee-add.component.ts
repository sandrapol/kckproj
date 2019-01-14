import { CoffeeService } from './../../statics/mCoffee';
import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee-add',
  templateUrl: './coffee-add.component.html',
  styleUrls: ['./coffee-add.component.css']
})
export class CoffeeAddComponent implements OnInit {
  coffeeServ=new CoffeeService();
  coffee:Coffee= new Coffee();
  error:boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  setName(writtenname) {
    this.coffee.name = writtenname;
    this.error=false;
    if(this.coffee.name.length<1)
    this.error=true;
  }
  setOrigin(value){
    this.coffee.origin=value;
    this.error=false;
    if(this.coffee.origin.length<1)
    this.error=true;
  }
  setDesc(value){
    this.coffee.description=value;
    this.error=false;
    if(this.coffee.description.length<1)
    this.error=true;
  }
  setType(value){
    this.coffee.type=value;
    this.error=false;
    if(this.coffee.type.length<1)
    this.error=true;
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
    if(!this.error){
      this.coffeeServ.addCoffee(this.coffee);
      console.log(this.coffee);
      this.router.navigateByUrl("/coffee");
    }
  }
}
