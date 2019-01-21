import { BillService } from 'src/app/services/bill.service';
import { Bill } from './../../statics/bill';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.component.html',
  styleUrls: ['./bill-add.component.css']
})
export class BillAddComponent implements OnInit {
  bill:Bill= new Bill();
  error:boolean;

  constructor(private router: Router, private serv: BillService) { }

  ngOnInit() {
  }
  setGrossValue(value){
    if(Number(value)>0){
    this.bill.grossValue=Number(value);
    this.error=false;
    }
    else
    this.error=true;
  }

  setDiscount(value){
    if(Number(value)>0){
    this.bill.discount=Number(value);
    this.error=false;
    }
    else
    this.error=true;
  }

  submit(){
    if (!this.error) {
      this.serv.addBill(this.bill).subscribe(
        elem=>console.log(elem),
        err=>console.log(err),
        ()=> this.router.navigateByUrl("/bills")
      );
     
    }
  }

}
