import { HarvestService } from './../../services/harvest.service';
import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harvest-list',
  templateUrl: './harvest-list.component.html',
  styleUrls: ['./harvest-list.component.css']
})
export class HarvestListComponent implements OnInit {
  private harvestList:any;
  loading:boolean= true;

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min Ilosc:</b> ' + value;
        case LabelType.High:
          return '<b>Max Ilosc:</b> ' + value;
        default:
          return ''+value;
      }
    }
  };
 

  constructor(private router: Router, private serv: HarvestService) { }

  ngOnInit() {
    this.serv.getHarvestList().subscribe(
      elem=> this.harvestList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
  }

  showDetails(id:number){
    this.router.navigateByUrl("/harvest/"+id);
  }

  delete(id:number){
    this.loading=true;
    this.serv.delete(id).subscribe(
      elem=> this.harvestList=elem,
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
      elem=> this.harvestList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }

}
