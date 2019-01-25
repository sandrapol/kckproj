import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  private paymentList:any;
  loading:boolean= true;

  constructor(private router:Router, private serv: PaymentService) { }

  ngOnInit() {
    this.serv.getPaymentList().subscribe(
      elem=> this.paymentList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
  }

  delete(id:number){
    this.loading=true;
    this.serv.delete(id).subscribe(
      elem=> this.paymentList=elem,
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
      elem=> this.paymentList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }


  search(value) {
    console.log(value)
    this.paymentList= this.paymentList.filter(elem => {
      if (elem.name.includes(value))
        return elem;
    });
    if(value==""){
      this.loading=true;
      this.serv.getPaymentList().subscribe(
        elem=> this.paymentList= elem,
        err=> console.log(err),
        ()=> this.loading=false
      )
    }
  }

}
