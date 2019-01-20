
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagazineService } from 'src/app/services/magazine.service';
import { Magazine } from 'src/app/statics/magazine';

@Component({
  selector: 'app-magazine-add',
  templateUrl: './magazine-add.component.html',
  styleUrls: ['./magazine-add.component.css']
})
export class MagazineAddComponent implements OnInit {

  magazine: Magazine = new Magazine();
  error: boolean;
  constructor(private router: Router, private serv: MagazineService) { }

  ngOnInit() {
  }
  setName(value) {
    this.magazine.name = value;
    this.error = false;
    if (this.magazine.name.length < 1)
      this.error = true;
  }
  setParam(value) {
    if (Number(value) > -1) {
      this.magazine.supply = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }
  submit() {
    if (!this.error) {
      if (this.magazine.supply == 0)
        this.magazine.coffeeAvailability = false;
      else
        this.magazine.coffeeAvailability = true;
        this.serv.addMagazine(this.magazine).subscribe(
        elem=> console.log(elem),
        err=> console.log(err),
          ()=> this.router.navigateByUrl("/magazines")
      );
      console.log(this.magazine);
     
    }
  }

}
