import { DeliveryService } from './../../services/delivery.service';
import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {
  private deliveryList:any;
  loading:boolean= true;
  private minimalna:number;
  private maksymalna:number;
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:{
          this.minimalna=value;
          return '<b>Min Ilosc:</b> ' + value ;
        }
        case LabelType.High:{
          this.maksymalna=value;
          return '<b>Max Ilosc:</b> ' + value;
        }
        default:
          return '' + value;
      }
    }
  };


  constructor(private router: Router, private serv: DeliveryService) { }

  ngOnInit() {
    this.serv.getDeliveryList().subscribe(
      elem=> this.deliveryList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
  }

  showDetails(id:number){
    this.router.navigateByUrl("/deliveries/"+id);
  }

  delete(id:number){
    this.loading=true;
    this.serv.delete(id).subscribe(
      elem=> this.deliveryList=elem,
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
      elem=> this.deliveryList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }

  policz(){
    this.serv.filter("quantity",this.minimalna,this.maksymalna).subscribe(
      elem=> this.deliveryList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }


}
