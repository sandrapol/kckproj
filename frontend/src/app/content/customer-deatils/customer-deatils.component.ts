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
  cust:any;
  loading:true;

  constructor(private route: ActivatedRoute, private serv: CustomerService ) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findCustomer(this.currentId).subscribe(
      elem=>this.cust=elem,
      err=>console.log(err)
    );
  }

}
