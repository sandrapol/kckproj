
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/statics/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  currentId: number;
  employee:any;
  loading:true;
  edit: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private serv: EmployeeService) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findEmployee(this.currentId).subscribe(
      elem=>this.employee=elem,
      err=>console.log(err)
    );
  }

  editIt() {
    this.edit = true;
  }

  setName(value) {
    this.employee.name = value;
    this.error = false;
    if (this.employee.name.length < 1)
      this.error = true;
  }
  setForename(value) {
    this.employee.forename = value;
    this.error = false;
    if (this.employee.forename.length < 1)
      this.error = true;
  }

  setPosition(value) {
    this.employee.position = value;
    this.error = false;
    if (this.employee.position.length < 1)
      this.error = true;
  }

  setSalary(value) {
    if (Number(value) > -1) {
      this.employee.salary = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }

  setBonus(value) {
    if (Number(value) > -1) {
      this.employee.bonus = Number(value);
      this.error = false;
    }
    else
      this.error = true;
  }

  submit() {
      this.serv.updateEmployee(this.employee).subscribe(
        elem => this.employee = elem,
        err => console.log(err),
        () => this.edit = false
      );
      console.log(this.employee);

    }

}
