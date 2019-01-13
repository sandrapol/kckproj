import { Coffee } from './../../statics/coffe';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COFFEE } from 'src/app/statics/mCoffee';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {
  currentId: number;
  coffee:Coffee;
  loading=true;
  findCoffee:Coffee[]= COFFEE;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.coffee=null;
    this.currentId=this.route.snapshot.params['id'];
    for(let elem of this.findCoffee){
      if(elem.id==this.currentId){
        this.coffee=elem;
      }
    }
  }
 
}
