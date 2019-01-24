
import { Plantation } from './../../statics/plantation';
import { Component, OnInit } from '@angular/core';
import { PlantationService } from 'src/app/services/plantation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantation-list',
  templateUrl: './plantation-list.component.html',
  styleUrls: ['./plantation-list.component.css']
})
export class PlantationListComponent implements OnInit {
  private plantationList:any;
  loading:boolean= true;


  constructor(private router:Router, private serv: PlantationService) { }

  ngOnInit() {
    this.serv.getPlantationList().subscribe(
      elem=> this.plantationList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
  }

  showDetails(id:number){
    this.router.navigateByUrl("/plantation/"+id);
  }

  delete(id:number){
    this.loading=true;
    this.serv.delete(id).subscribe(
      elem=> this.plantationList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }

  setSelected() {
    this.loading=true;
    let e = (document.getElementById("sortDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    this.serv.sort(opt.value).subscribe(
      elem=> this.plantationList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }
  search(value) {
    console.log(value)
    this.plantationList= this.plantationList.filter(elem => {
      if (elem.name.includes(value))
        return elem;
    });
    if(value==""){
      this.loading=true;
      this.serv.getPlantationList().subscribe(
        elem=> this.plantationList= elem,
        err=> console.log(err),
        ()=> this.loading=false
      )
    }
}
