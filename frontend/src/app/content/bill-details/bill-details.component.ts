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

  constructor(private route: ActivatedRoute, private serv: BillService) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findBill(this.currentId).subscribe(
      elem=>this.bill=elem,
      err=>console.log(err)
    );
  }

}
