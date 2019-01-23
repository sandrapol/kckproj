
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

  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min Zapas:</b> ' + value +'zł';
        case LabelType.High:
          return '<b>Max Zapas:</b> ' + value+ 'zł';
        default:
          return value + 'zł';
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
