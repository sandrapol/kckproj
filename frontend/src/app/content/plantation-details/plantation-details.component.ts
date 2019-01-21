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

  constructor(private route: ActivatedRoute, private serv: PlantationService) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findPlantation(this.currentId).subscribe(
      elem=>this.plantation=elem,
      err=>console.log(err)
    );
  }

}
