import { Customer } from './../../statics/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private customerList:any;
  loading:boolean= true;

  
  constructor(private router:Router, private serv: CustomerService) { }

  ngOnInit() {
    this.serv.getCustomerList().subscribe(
      elem=> this.customerList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
  }
  showDetails(id:number){
    this.router.navigateByUrl("/customer/"+id);
  }

  delete(id:number){
    this.loading=true;
    this.serv.delete(id).subscribe(
      elem=> this.customerList=elem,
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
      elem=> this.customerList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }
  search(value) {
    console.log(value)
    this.customerList = this.customerList.filter(elem => {
      if (elem.name.includes(value))
        return elem;
    });
    if(value==""){
      this.loading=true;
      this.serv.getCustomerList().subscribe(
        elem=> this.customerList= elem,
        err=> console.log(err),
        ()=> this.loading=false
      )
    }
  }
}
