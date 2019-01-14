import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/statics/mCoffee';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  coffeeServ=new CoffeeService();
  coffee:Coffee= new Coffee();
  error:boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  setName(value){
    if(value!=null || value!=''){
    this.coffee.name=value;
    this.error=false;
    }
    else
    this.error=true;
  }
  setOrigin(value){
    if(value!=null){
    this.coffee.origin=value;
    this.error=false;
    }
    else
    this.error=true;
  }
  setDesc(value){
    if(value!=null){
    this.coffee.description=value;
    this.error=false;
    }
    else
    this.error=true;
  }
  setType(value){
    if(value!=null){
    this.coffee.type=value;
    this.error=false;
    }
    else
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
