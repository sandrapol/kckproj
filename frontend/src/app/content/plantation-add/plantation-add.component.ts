import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantationService } from 'src/app/services/plantation.service';
import { Plantation } from 'src/app/statics/plantation';

@Component({
  selector: 'app-plantation-add',
  templateUrl: './plantation-add.component.html',
  styleUrls: ['./plantation-add.component.css']
})
export class PlantationAddComponent implements OnInit {

  plantation:Plantation= new Plantation();
  error:boolean;
  constructor(private router: Router, private serv: PlantationService) { }

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
    if (!this.error) {
      this.serv.addPlantation(this.plantation).subscribe(
        elem=>console.log(elem),
        err=>console.log(err),
        ()=> this.router.navigateByUrl("/plantations")
      );
     
    }
  }
}
