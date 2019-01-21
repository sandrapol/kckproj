import { BillService } from 'src/app/services/bill.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  currentId: number;
  bill:any;
  loading:true;
  edit: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private serv: BillService) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findBill(this.currentId).subscribe(
      elem=>this.bill=elem,
      err=>console.log(err)
    );
  }

  editIt() {
    this.edit = true;
  }
  setGrossValue(value) {
    if (Number(value) > -1) {
      this.bill.grossValue = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }
  setDiscount(value) {
    if (Number(value) > -1) {
      this.bill.discount = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }
  submit() {
    if (!this.error) {
      this.serv.updateBill(this.bill).subscribe(
        elem => this.bill = elem,
        err => console.log(err),
        () => this.edit = false
      );
      console.log(this.bill);
    }
  }

}
