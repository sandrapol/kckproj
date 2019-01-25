import { PaymentService } from './../../services/payment.service';
import { Payment } from './../../statics/payment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {

  payment:Payment= new Payment();
  error:boolean;

  constructor(private router: Router, private serv: PaymentService) { }

  ngOnInit() {
  }

  setTypeOfPayment(value){
    this.payment.typeOfPayment=value;
    this.error=false;
    if (this.payment.typeOfPayment.length < 1)
    this.error = true;
  }

  submit(){
    if (!this.error) {
      this.serv.addPayment(this.payment).subscribe(
        elem=>console.log(elem),
        err=>console.log(err),
        ()=> this.router.navigateByUrl("/bills")
      );
     
    }
  }


}
