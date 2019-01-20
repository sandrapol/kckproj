import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/statics/coffe';
import { Router } from '@angular/router';
import { Employee } from 'src/app/statics/employee';
import { EmployeeService } from 'src/app/statics/mEployee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employeeServ=new EmployeeService();
  employee:Employee= new Employee();
  error:boolean;
  constructor(private router: Router) { }

  ngOnInit() {
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
  setPost(value){
    this.employee.regularPost=value;
    this.error=false;
    if(this.employee.regularPost.length<1)
    this.error=true;
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
    if(!this.error){
      this.employeeServ.addEmployee(this.employee);
      console.log(this.employee);
      this.router.navigateByUrl("/employees");
    }
  }

}
