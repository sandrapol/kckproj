
import { Magazine } from './../../statics/magazine';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagazineService } from 'src/app/services/magazine.service';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.css']
})
export class MagazineListComponent implements OnInit {
  private magazineList:any;
  loading:boolean= true;

  constructor(private router:Router, private serv: MagazineService) { }

  ngOnInit() {
    this.serv.getMagazineList().subscribe(
      elem=> {this.magazineList= elem; console.log(elem)},
      err=> console.log(err),
      ()=> this.loading=false
    )
  }

  showDetails(id:number){
    this.router.navigateByUrl("/magazine/"+id);
  }

}
