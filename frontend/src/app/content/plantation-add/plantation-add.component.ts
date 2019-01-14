import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/statics/mCoffee';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';
import { PlantationService } from 'src/app/statics/mPlantations';
import { Plantation } from 'src/app/statics/plantation';

@Component({
  selector: 'app-plantation-add',
  templateUrl: './plantation-add.component.html',
  styleUrls: ['./plantation-add.component.css']
})
export class PlantationAddComponent implements OnInit {

  plantServ=new PlantationService();
  plantation:Plantation= new Plantation();
  error:boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  setName(value){
    this.plantation.name=value;
    this.error=false;
    if (this.plantation.name.length < 1)
    this.error = true;
  }
  setCountry(value){
    this.plantation.country=value;
    this.error=false;
    if (this.plantation.country.length < 1)
    this.error = true;
  }
  setRegion(value){
    this.plantation.region=value;
    if (this.plantation.region.length < 1)
    this.error = true;
  }
  
  submit(){
    if(!this.error){
      this.plantServ.addCoffee(this.plantation);
      console.log(this.plantation);
      this.router.navigateByUrl("/plantations");
    }
  }
}
