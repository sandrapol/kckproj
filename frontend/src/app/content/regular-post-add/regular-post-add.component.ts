import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegularService } from 'src/app/services/regular.service';
import { RegularPost } from 'src/app/statics/regularPost';

@Component({
  selector: 'app-regular-post-add',
  templateUrl: './regular-post-add.component.html',
  styleUrls: ['./regular-post-add.component.css']
})
export class RegularPostAddComponent implements OnInit {

  regularPost: RegularPost = new RegularPost();
  error: boolean;
  errorDetails: String;
  constructor(private router: Router, private serv: RegularService) { }

  ngOnInit() {
  }
  setStart(value) {
    console.log(value)
    this.regularPost.startTime = value;
  }
  setEnd(value) {
    console.log(value)
    this.regularPost.endTime = value;
  }
  setDay(value) {
    if (Number(value) > 0 && Number(value) < 8 && Number.isInteger(Number(value))){
      this.regularPost.dayNumnber = Number(value);
      this.error = false;
    }
    else {
      this.errorDetails = "Day number is invalid"
      this.error = true;
    }
  }
  check() {
    if (this.regularPost.dayNumnber == undefined) {
      this.errorDetails = " Set number of days"
      return false;
    }
    if (this.regularPost.startTime == undefined) {
      this.errorDetails = " Set start time"
      return false;
    }
    if (this.regularPost.endTime == undefined) {
      this.errorDetails = " Set end time"
      return false;
    }
    return true;
  }

  submit() {
    if (!this.error && this.check()) {
      this.serv.addRegularPost(this.regularPost).subscribe(
        elem => console.log(elem),
        err => console.log(err),
        () => this.router.navigateByUrl("/employees")
      )
    }
    else {
      this.error = true;
    }
  }
}
