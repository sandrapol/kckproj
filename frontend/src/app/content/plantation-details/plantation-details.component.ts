import { Plantation } from './../../statics/plantation';
import { Component, OnInit } from '@angular/core';
import { PlantationService } from 'src/app/services/plantation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantation-details',
  templateUrl: './plantation-details.component.html',
  styleUrls: ['./plantation-details.component.css']
})
export class PlantationDetailsComponent implements OnInit {
  currentId: number;
  plantation:any;
  loading:true;
  edit: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private serv: PlantationService) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findPlantation(this.currentId).subscribe(
      elem=>this.plantation=elem,
      err=>console.log(err)
    );
  }

  editIt() {
    this.edit = true;
  }
  setName(value) {
    this.plantation.name = value;
    this.error = false;
    if (this.plantation.name.length < 1)
      this.error = true;
  }
  setCountry(value) {
    this.plantation.country = value;
    this.error = false;
    if (this.plantation.country.length < 1)
      this.error = true;
  }
  setRegion(value) {
    this.plantation.region = value;
    this.error = false;
    if (this.plantation.region.length < 1)
      this.error = true;
  }

  submit() {
      this.serv.updatePlantation(this.plantation).subscribe(
        elem => this.plantation = elem,
        err => console.log(err),
        () => this.edit = false
      );
      console.log(this.plantation);

    }
  }


