import { CoffeeService } from './../../statics/mCoffee';
import { Coffee } from './../../statics/coffe';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs/operators';


@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {
  private cofServ= new CoffeeService();
  private coffeeList:Coffee[]= this.cofServ.CoffeeList;
  currentId: number;
  coffee:Coffee;
  loading=true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.coffee=null;
    this.currentId=Number(this.route.snapshot.params['id']);
    this.coffee=this.cofServ.findCoffee(this.currentId)
  }
 
}
