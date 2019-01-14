import { Customer } from './../../statics/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/statics/mCustomer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private custServ= new CustomerService();
  private customerList:Customer[]= this.custServ.CustomerList;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  showDetails(id:number){
    this.router.navigateByUrl("/customer/"+id);
  }
}
