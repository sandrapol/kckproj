import { BillService } from './../../services/bill.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  private billList:any;
  loading:boolean= true;

  constructor(private router: Router, private serv: BillService) { }

  ngOnInit() {
    this.serv.getBillList().subscribe(
      elem=> this.billList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
  }
  showDetails(id:number){
    this.router.navigateByUrl("/bills/"+id);
  }

  delete(id:number){
    this.loading=true;
    this.serv.delete(id).subscribe(
      elem=> this.billList=elem,
      err=> console.log(err),
      ()=> {this.loading=false; }
    )
  }
}
