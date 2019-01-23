import { CustomerService } from 'src/app/services/customer.service';
import { CoffeeService } from './../../services/coffee.service';
import { Coffee } from 'src/app/statics/coffe';
import { BillService } from 'src/app/services/bill.service';
import { Bill } from './../../statics/bill';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from 'src/app/statics/sale';
import { Customer } from 'src/app/statics/customer';

@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.component.html',
  styleUrls: ['./bill-add.component.css']
})
export class BillAddComponent implements OnInit {
  bill: Bill = new Bill();
  error: boolean;
  coffeeList;
  customers:Customer[];
  customerId;
  currentSale = new Sale();
  currentCoffee = new Coffee();
  sales: Sale[] = [];
  constructor(private router: Router, private serv: BillService, private coffeeServ: CoffeeService,
    private custService: CustomerService) { }

  ngOnInit() {
    this.currentSale.howMuchToPay = 0;
    this.coffeeServ.getCoffeeList().subscribe(
      elem => this.coffeeList = elem,
      err => console.log(err)
    )
    this.custService.getCustomerList().subscribe(
      elem => this.customers = elem,
      err => console.log(err)
    )
  }
  setCust() {
    let e = (document.getElementById("custDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    for (let elem of this.customers) {
      console.log(elem.id)
      if (elem.id == Number(opt.value)) {
        this.customerId = elem.id;
        console.log(this.customerId)
      }
    }
  }
  setCoffee() {
    let e = (document.getElementById("coffeeDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    for (let elem of this.coffeeList) {
      if (elem.id == opt.value) {
        this.currentCoffee = elem;
        this.currentSale.coffee = this.currentCoffee;
      }
    }
  }
  setWeight(value) {
    if (Number(value) > 0 && this.currentCoffee != undefined) {
      this.currentSale.quantityInKg = Number(value);
      this.error = false;
      this.currentSale.howMuchToPay = Number(value * this.currentCoffee.price);
    }
    else
      this.error = true;
  }
  add() {
    let newSale: Sale = new Sale()
    newSale = this.currentSale;
    this.sales.push(newSale);
    this.bill.grossValue = 0;
    this.sales.forEach(
      elem => this.bill.grossValue += elem.howMuchToPay
    );
    this.bill.netValue = Math.round(this.bill.grossValue * 0.77 * 100) / 100;
    this.bill.vatValue = this.bill.grossValue - this.bill.netValue;
    this.currentSale = new Sale();
  }

  setDiscount(value) {
    if (Number(value) > 0) {
      this.bill.discount = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }
  check(): boolean {
    if (this.sales.length < 1)
      return false;
    if (this.customerId == undefined)
      return false;
    if (this.bill.discount == undefined)
      return false;
    if (this.bill.grossValue == undefined)
      return false;
    return true;
  }

  submit() {
    if (!this.error && this.check()) {
      this.serv.addBill(this.bill,this.sales,this.customerId).subscribe(
        elem => console.log(elem),
        err => console.log(err),
        () => this.router.navigateByUrl("/bills")
      );

    } else {
      this.error = true;
    }
  }

}
