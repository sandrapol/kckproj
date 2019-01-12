import { Coffee } from './../../statics/coffe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COFFEE } from 'src/app/statics/mCoffee';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {
  currentId: number;
  coffee:Coffee;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {this.currentId = params['id'];},
      );
      let findCoffee:Coffee[]= COFFEE.filter(elem=>elem.id=this.currentId);
      this.coffee=findCoffee[0];
      console.log(this.coffee);
  }

}
