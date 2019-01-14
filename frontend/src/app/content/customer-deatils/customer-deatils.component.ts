import { Customer } from './../../statics/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/statics/mCustomer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-deatils',
  templateUrl: './customer-deatils.component.html',
  styleUrls: ['./customer-deatils.component.css']
})
export class CustomerDeatilsComponent implements OnInit {
  private custServ= new CustomerService();
  private customerList:Customer[]= this.custServ.CustomerList;
  currentId: number;
  customer:Customer;
  loading=true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer=null;
    this.currentId=Number(this.route.snapshot.params['id']);
    this.customer=this.custServ.findCustomer(this.currentId)
  }

}
