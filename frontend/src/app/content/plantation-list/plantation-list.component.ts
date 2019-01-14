import { Plantation } from './../../statics/plantation';
import { Component, OnInit } from '@angular/core';
import { PlantationService } from 'src/app/statics/mPlantations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantation-list',
  templateUrl: './plantation-list.component.html',
  styleUrls: ['./plantation-list.component.css']
})
export class PlantationListComponent implements OnInit {
  private planServ= new PlantationService();
  private plantationList:Plantation[]=this.planServ.PlantationList;


  constructor(private router:Router) { }

  ngOnInit() {
  }

  showDetails(id:number){
    this.router.navigateByUrl("/plantation/"+id);
  }

}
