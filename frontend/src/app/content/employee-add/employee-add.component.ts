import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';
import { Employee } from 'src/app/statics/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { RegularPost } from 'src/app/statics/regularPost';
import { RegularService } from 'src/app/services/regular.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee:Employee= new Employee();
  error:boolean;
  regularId:number;
  regularList;
  constructor(private router: Router, private serv: EmployeeService, private regularServ: RegularService) { }

  ngOnInit() {
    this.regularServ.getRegularPostList().subscribe(
      elem=> this.regularList=elem,
      err=> console.log(err)
    )
  }
  setName(value){
    this.employee.name=value;
    this.error=false;
    if(this.employee.name.length<1)
    this.error=true;
  }
  setForename(value){
    this.employee.forename=value;
    this.error=false;
    if(this.employee.forename.length<1)
    this.error=true;
  }
  setPosition(value){
    this.employee.position=value;
    this.error=false;
    if(this.employee.position.length<1)
    this.error=true;
  }
  setRegular() {
    let e = (document.getElementById("regularDrop")) as HTMLSelectElement;
    let sel = e.selectedIndex;
    var opt = e.options[sel];
    for (let elem of this.regularList) {
      console.log(elem.id)
      if (elem.id == Number(opt.value)) {
        this.regularId = elem.id;
        console.log(this.regularId)
      }
    }
  }
  setSalary(value){
    if(Number(value)>0){
    this.employee.salary=Number(value);
    this.error=false;
    }
    else
    this.error=true;
  }
  setBonus(value){
    if(Number(value)>0){
    this.employee.bonus=Number(value);
    this.error=false;
    }
    else
    this.error=true;
  }
  submit(){
    if (!this.error) {
      this.serv.addEmployee(this.employee, this.regularId).subscribe(
        elem=>console.log(elem),
        err=>console.log(err),
        ()=> this.router.navigateByUrl("/employees")
      );
     
    }
  }

}
