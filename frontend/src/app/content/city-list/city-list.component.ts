import { Customer } from './../../statics/customer';
import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  private cityList: any;
  loading: boolean = true;


  constructor(private router: Router, private serv: CityService) { }

  ngOnInit() {
    this.serv.getCityList().subscribe(
      elem => this.cityList = elem,
      err => console.log(err),
      () => this.loading = false
    )
  }
  showDetails(id: number) {
    this.router.navigateByUrl("/city/" + id);
  }

  delete(id: number) {
    this.loading = true;
    this.serv.delete(id).subscribe(
      elem => this.cityList = elem,
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
      elem => this.cityList = elem,
      err => console.log(err),
      () => { this.loading = false; }
    )
  }
  search(value) {
    console.log(value)
    this.cityList = this.cityList.filter(elem => {
      if (elem.name.includes(value))
        return elem;
    });
    if(value==""){
      this.loading=true;
      this.serv.getCityList().subscribe(
        elem => this.cityList = elem,
        err => console.log(err),
        () => this.loading = false
      )
    }
  }
}

