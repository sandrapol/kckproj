import { CoffeeService } from 'src/app/services/coffee.service';
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
  currentId: number;
  coffee:any;
  loading:true;
  
  constructor(private route: ActivatedRoute, private serv: CoffeeService) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findCoffee(this.currentId).subscribe(
      elem=>this.coffee=elem,
      err=>console.log(err)
    );
  }
 
}
