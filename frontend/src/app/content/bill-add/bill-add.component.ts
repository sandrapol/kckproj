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
  setNetValue(value){
    if(Number(value)>0){
    this.bill.netValue=Number(value);
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

}
