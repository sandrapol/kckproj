
import { Magazine } from './../../statics/magazine';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagazineService } from 'src/app/services/magazine.service';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.css']
})
export class MagazineListComponent implements OnInit {
  private magazineList:any;
  loading:boolean= true;
  private minimalna:number;
  private maksymalna:number;
  minValue: number = 100;
    maxValue: number = 300;
  options: Options = {
    floor: 0,
    ceil: 5000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:{
          this.minimalna=value;
          return '<b>Min Zapas:</b> ' + value;
        }
        case LabelType.High:{
          this.maksymalna = value;
          return '<b>Max Zapas:</b> ' + value;
        }
        default:
          return value + '';
      }
    }
  };

  constructor(private router:Router, private serv: MagazineService) { }

  ngOnInit() {
    this.serv.getMagazineList().subscribe(
      elem=> this.magazineList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
  }

  showDetails(id:number){
    this.router.navigateByUrl("/magazine/"+id);
  }

  policz(){
    this.serv.filter("supply",this.minimalna,this.maksymalna).subscribe(
      elem=> this.magazineList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }
  delete(id:number){
    this.loading=true;
    this.serv.delete(id).subscribe(
      elem=> this.magazineList=elem,
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
      elem=> this.magazineList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }

}
