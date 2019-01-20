import { Customer } from './../../statics/customer';
import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  cust:Customer= new Customer();
  error:boolean;
  constructor(private router: Router, private serv: CustomerService) { }

  ngOnInit() {
  }

  setName(value){
    this.cust.name = value;
    this.error = false;
    if (this.cust.name.length < 1)
      this.error = true;
  }

  setForename(value){
    this.cust.forename=value;
    this.error=false;
    if(this.cust.forename.length<1)
    this.error=true;
  }

  setStreet(value){
    this.cust.street=value;
    this.error=false;
    if(this.cust.street.length<1)
    this.error=true;
  }

  setCity(value){
    this.cust.city=value;
    this.error=false;
    if(this.cust.city.length<1)
    this.error=true;
  }
  setNumber(value){
    if(Number(value)>0){
    this.cust.houseNumber=Number(value);
    this.error=false;
    }
    else
    this.error=true;
  }

  setTelephone(value){
    if(Number(value)>0){
    this.cust.telephoneNumber=Number(value);
    this.error=false;
    }
    else
    this.error=true;
  }
  submit(){
    if (!this.error) {
      this.serv.addCustomer(this.cust).subscribe(
        elem=>console.log(elem),
        err=>console.log(err),
        ()=> this.router.navigateByUrl("/customers")
      );
     
    }
  }

}
