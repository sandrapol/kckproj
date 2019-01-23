import { PlantationService } from './../../services/plantation.service';
import { MagazineService } from './../../services/magazine.service';
import { DeliveryService } from './../../services/delivery.service';
import { Delivery } from './../../statics/delivery';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-add',
  templateUrl: './delivery-add.component.html',
  styleUrls: ['./delivery-add.component.css']
})
export class DeliveryAddComponent implements OnInit {
  delivery: Delivery = new Delivery();
  error: boolean;
  plantationList: any;
  plantationId: number = null;
  magazineList: any;
  magazineId: number = null;

  constructor(private router: Router, private serv: DeliveryService, private plantServ: PlantationService ,private magServ: MagazineService) { }


  ngOnInit() {
    this.plantServ.getPlantationList().subscribe(
      elem => this.plantationList = elem,
      err => console.log(err))
    this.magServ.getMagazineList().subscribe(
      elem => this.magazineList = elem,
      err => console.log(err))
  }

  setSelectedPlantation() {
    let e = (document.getElementById("sortDropPlant")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    this.plantationId = Number(opt.value);
    console.log(this.plantationId);
  }

  setSelected() {
    let e = (document.getElementById("sortDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    this.magazineId = Number(opt.value);
    console.log(this.magazineId);
  }

  setConveyance(value) {
    this.delivery.conveyance = value;
    this.error = false;
    if (this.delivery.conveyance.length < 1)
      this.error = true;
  }

  check() {
    if (this.delivery.conveyance == undefined)
      return false;
    if (this.plantationId== null)
      return false;
    if (this.magazineId== null)
      return false;
      
    return true;
  }
  submit() {
    if (!this.error && this.check()) {
      this.serv.addDelivery(this.delivery,this.plantationId, this.magazineId).subscribe(
        elem => console.log(elem),
        err => console.log(err),
        () => this.router.navigateByUrl("/deliveries")
      );

    } else {
      this.error = true;
    }
  }

}
