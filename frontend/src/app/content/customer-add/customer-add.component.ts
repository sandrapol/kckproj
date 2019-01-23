import { CityService } from './../../services/city.service';
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
  cust: Customer = new Customer();
  error: boolean;
  cityList: any;
  cityId: number = null;
  constructor(private router: Router, private serv: CustomerService, private cityServ: CityService) { }

  ngOnInit() {
    this.cityServ.getCityList().subscribe(
      elem => this.cityList = elem,
      err => console.log(err))
  }

  setSelected() {
    let e = (document.getElementById("sortDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    this.cityId = Number(opt.value);
    console.log(this.cityId);
  }

  setName(value) {
    this.cust.name = value;
    this.error = false;
    if (this.cust.name.length < 1)
      this.error = true;
  }

  setForename(value) {
    this.cust.forename = value;
    this.error = false;
    if (this.cust.forename.length < 1)
      this.error = true;
  }

  setStreet(value) {
    this.cust.street = value;
    this.error = false;
    if (this.cust.street.length < 1)
      this.error = true;
  }

  setCity(value) {
    this.cust.city = value;
    this.error = false;
    if (this.cust.city.length < 1)
      this.error = true;
  }
  setNumber(value) {
    if (Number(value) > 0) {
      this.cust.houseNumber = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }

  setTelephone(value) {
    if (Number(value) > 0) {
      this.cust.telephoneNumber = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }

  check() {
    if (this.cust.name == undefined)
      return false;
    if (this.cust.forename == undefined)
      return false;
    if (this.cust.telephoneNumber == undefined)
      return false;
    if (this.cust.street == undefined)
      return false;
    if (this.cust.houseNumber == undefined)
      return false;
      if (this.cityId == null)
      return false;

    return true;
  }

  submit() {
    if (!this.error && this.check()) {
      this.serv.addCustomer(this.cust, this.cityId).subscribe(
        elem => console.log(elem),
        err => console.log(err),
        () => this.router.navigateByUrl("/customers")
      );

    } else {
      this.error = true;
    }
  }

}
