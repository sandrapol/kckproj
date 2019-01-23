import { CoffeeService } from 'src/app/services/coffee.service';
import { Coffee } from './../../statics/coffe';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs/operators';
import { MagazineService } from 'src/app/services/magazine.service';


@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {
  currentId: number;
  coffee:any;
  loading:true;
  edit: boolean = false;
  error: boolean = false;
  
  constructor(private route: ActivatedRoute, private serv: CoffeeService) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findCoffee(this.currentId).subscribe(
      elem=>this.coffee=elem,
      err=>console.log(err)
    );
  }

  editIt() {
    this.edit = true;
  }

  setName(value) {
    this.coffee.name = value;
    this.error = false;
    if (this.coffee.name.length < 1)
      this.error = true;
  }
  setSpecies(value) {
    this.coffee.species = value;
    this.error = false;
    if (this.coffee.species.length < 1)
      this.error = true;
  }

  setType(value) {
    this.coffee.type = value;
    this.error = false;
    if (this.coffee.type.length < 1)
      this.error = true;
  }



  setPrice(value) {
    if (Number(value) > -1) {
      this.coffee.price = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }

 
  submit() {
      this.serv.updateCoffee(this.coffee).subscribe(
        elem => this.coffee = elem,
        err => console.log(err),
        () => this.edit = false
      );
      console.log(this.coffee);

    }
  }
 

