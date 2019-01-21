import { Customer } from './../../statics/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-deatils',
  templateUrl: './customer-deatils.component.html',
  styleUrls: ['./customer-deatils.component.css']
})
export class CustomerDeatilsComponent implements OnInit {
  currentId: number;
  customer:any;
  loading:true;
  edit: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private serv: CustomerService ) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findCustomer(this.currentId).subscribe(
      elem=>this.customer=elem,
      err=>console.log(err)
    );
  }

  editIt() {
    this.edit = true;
  }

  setName(value) {
    this.customer.name = value;
    this.error = false;
    if (this.customer.name.length < 1)
      this.error = true;
  }
  setForename(value) {
    this.customer.forename = value;
    this.error = false;
    if (this.customer.forename.length < 1)
      this.error = true;
  }

  setPhoneNumber(value) {
    if (Number(value) > -1) {
      this.customer.telephoneNumber = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }

  setStreet(value) {
    this.customer.street = value;
    this.error = false;
    if (this.customer.street.length < 1)
      this.error = true;
  }

  setHouseNumber(value) {
    if (Number(value) > -1) {
      this.customer.houseNumber = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }

  submit() {
      this.serv.updateCustomer(this.customer).subscribe(
        elem => this.customer = elem,
        err => console.log(err),
        () => this.edit = false
      );
      console.log(this.customer);

    }

}
