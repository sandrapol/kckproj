import { BillService } from './../../services/bill.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  private billList: any;
  loading: boolean = true;

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 5000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min Brutto:</b> ' + value+ 'zł';
        case LabelType.High:
          return '<b>Max Brutto:</b> ' + value+ 'zł';
        default:
          return value+'zł';
      }
    }
  };
  constructor(private router: Router, private serv: BillService) { }

  ngOnInit() {
    this.serv.getBillList().subscribe(
      elem => this.billList = elem,
      err => console.log(err),
      () => this.loading = false
    )
  }
  showDetails(id: number) {
    this.router.navigateByUrl("/bills/" + id);
  }

  delete(id: number) {
    this.loading = true;
    this.serv.delete(id).subscribe(
      elem => this.billList = elem,
      err => console.log(err),
      () => { this.loading = false; }
    )
  }

  setSelected() {
    this.loading = true;
    let e = (document.getElementById("sortDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    this.serv.sort(opt.value).subscribe(
      elem => this.billList = elem,
      err => console.log(err),
      () => { this.loading = false; }
    )
  }
}
