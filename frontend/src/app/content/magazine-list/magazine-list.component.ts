import { Magazine } from './../../statics/magazine';
import { Component, OnInit } from '@angular/core';
import { MagazineService } from 'src/app/statics/mMagazine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.css']
})
export class MagazineListComponent implements OnInit {
  private magServ= new MagazineService();
  private magazineList:Magazine[]=this.magServ.MagazineList;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showDetails(id:number){
    this.router.navigateByUrl("/magazine/"+id);
  }

}
