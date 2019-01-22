
import { CoffeeService } from 'src/app/services/coffee.service';
import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';
import { MagazineService } from 'src/app/services/magazine.service';

@Component({
  selector: 'app-coffee-add',
  templateUrl: './coffee-add.component.html',
  styleUrls: ['./coffee-add.component.css']
})
export class CoffeeAddComponent implements OnInit {
  coffee:Coffee= new Coffee();
  error:boolean;
  magazineList:any;
  magazineId:number;
  constructor(private router: Router, private serv:CoffeeService, private magServ: MagazineService) { }

  ngOnInit() {
    this.magServ.getMagazineList().subscribe(
      elem=> this.magazineList= elem,
      err=> console.log(err))
  }
  setSelected() {
    let e = (document.getElementById("sortDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    this.magazineId=Number(opt.value);
    console.log(this.magazineId);
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
      this.serv.addCoffee(this.coffee,this.magazineId).subscribe(
        elem=>console.log(elem),
        err=>console.log(err),
        ()=> this.router.navigateByUrl("/coffee")
      );
     
    }
  }
}
