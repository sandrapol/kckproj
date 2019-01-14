import { Plantation } from './../../statics/plantation';
import { Component, OnInit } from '@angular/core';
import { PlantationService } from 'src/app/statics/mPlantations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantation-details',
  templateUrl: './plantation-details.component.html',
  styleUrls: ['./plantation-details.component.css']
})
export class PlantationDetailsComponent implements OnInit {
  private planServ= new PlantationService();
  private plantationList:Plantation[]= this.planServ.PlantationList;
  currentId: number;
  plantation:Plantation;
  loading=true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.plantation=null;
    this.currentId=Number(this.route.snapshot.params['id']);
    this.plantation=this.planServ.findPlantation(this.currentId);
  }

}
