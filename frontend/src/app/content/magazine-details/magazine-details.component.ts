import { CoffeeService } from './../../services/coffee.service';
import { Coffee } from 'src/app/statics/coffe';
import { Magazine } from './../../statics/magazine';
import { Component, OnInit } from '@angular/core';
import { MagazineService } from 'src/app/services/magazine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-magazine-details',
  templateUrl: './magazine-details.component.html',
  styleUrls: ['./magazine-details.component.css']
})
export class MagazineDetailsComponent implements OnInit {
  currentId: number;
  magazine: any;
  loading: boolean = true;
  edit: boolean = false;
  error: boolean = false;
  coffeeList: Coffee[]

  constructor(private route: ActivatedRoute, private serv: MagazineService, private coffeeServ: CoffeeService) { }

  ngOnInit() {
    this.currentId = Number(this.route.snapshot.params['id']);
    this.serv.findMagazine(this.currentId).subscribe(
      elem => this.magazine = elem,
      err => console.log(err)
    );
    this.coffeeServ.coffeeByMagazines(this.currentId).subscribe(
      elem => this.coffeeList = elem,
      err => console.log(err)
    )
  }
  editIt() {
    this.edit = true;
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
      this.serv.updateMagazine(this.magazine).subscribe(
        elem => this.magazine = elem,
        err => console.log(err),
        () => this.edit = false
      );
      console.log(this.magazine);

    }
  }

}
