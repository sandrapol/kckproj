import { City } from './../../statics/city';
import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {
  city: City = new City();
  error: boolean;
  
  constructor(private router: Router, private serv: CityService) { }

  ngOnInit() {
  }

 

  setName(value) {
    this.city.name = value;
    this.error = false;
    if (this.city.name.length < 1)
      this.error = true;
  }

  setVoivodeship(value) {
    this.city.voivodeship = value;
    this.error = false;
    if (this.city.voivodeship.length < 1)
      this.error = true;
  }

  setZIPcode(value) {
    if (Number(value) > 0) {
      this.city.ZIPcode = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }


  check() {
    if (this.city.name == undefined)
      return false;
    if (this.city.voivodeship == undefined)
      return false;
    if (this.city.ZIPcode == undefined)
      return false;

    return true;
  }

  submit() {
    if (!this.error) {
      this.serv.addCity(this.city).subscribe(
        elem=>console.log(elem),
        err=>console.log(err),
        ()=> this.router.navigateByUrl("/cities")
      );
     
    }
  }

}
