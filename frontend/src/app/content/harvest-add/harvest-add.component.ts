import { PlantationService } from './../../services/plantation.service';
import { HarvestService } from './../../services/harvest.service';
import { Harvest } from './../../statics/harvest';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harvest-add',
  templateUrl: './harvest-add.component.html',
  styleUrls: ['./harvest-add.component.css']
})
export class HarvestAddComponent implements OnInit {

  harvest: Harvest = new Harvest();
  error: boolean;
  plantationList: any;
  plantationId: number = null;

  constructor(private router: Router, private serv: HarvestService, private plantServ: PlantationService) { }

  ngOnInit() {
    this.plantServ.getPlantationList().subscribe(
      elem => this.plantationList = elem,
      err => console.log(err))
  }

  setSelected() {
    let e = (document.getElementById("sortDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    this.plantationId = Number(opt.value);
    console.log(this.plantationId);
  }
  setQuality(value) {
    this.harvest.quality = value;
    this.error = false;
    if (this.harvest.quality.length < 1)
      this.error = true;
      console.log(this.harvest.quality)
  }

  setQuantity(value) {
    if (Number(value) > -1) {
      this.harvest.quantity = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }

  check() {
    if (this.harvest.quality == undefined)
      return false;
    if (this.harvest.quantity== undefined)
      return false;
    if (this.plantationId == null)
      return false;
      
    return true;
  }
  submit() {
    if (!this.error && this.check()) {
      this.serv.addHarvest(this.harvest, this.plantationId).subscribe(
        elem => console.log(elem),
        err => console.log(err),
        () => this.router.navigateByUrl("/harvest")
      );

    } else {
      this.error = true;
    }
    console.log(this.harvest.quality);
    console.log(this.plantationId);
  }

}
