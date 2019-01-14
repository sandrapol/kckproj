import { Magazine } from './../../statics/magazine';
import { Component, OnInit } from '@angular/core';
import { MagazineService } from 'src/app/statics/mMagazine';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-magazine-details',
  templateUrl: './magazine-details.component.html',
  styleUrls: ['./magazine-details.component.css']
})
export class MagazineDetailsComponent implements OnInit {
  private magServ= new MagazineService();
  private magazineList:Magazine[]= this.magServ.MagazineList;
  currentId: number;
  magazine:Magazine;
  loading=true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.magazine=null;
    this.currentId=Number(this.route.snapshot.params['id']);
    this.magazine=this.magServ.findMagazine(this.currentId);
  }

}
