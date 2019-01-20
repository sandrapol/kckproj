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
  magazine:any;
  loading=true;

  constructor(private route: ActivatedRoute, private serv: MagazineService) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findMagazine(this.currentId).subscribe(
      elem=>this.magazine=elem,
      err=>console.log(err)
    );
  }

}
