import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/statics/employee';
import { EMPLOYEES } from 'src/app/statics/mEployee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private employeeList:Employee[]=EMPLOYEES;

  constructor(private router:Router) { }

  ngOnInit() {
  }
    showDetails(id:number){
      this.router.navigateByUrl("/employee/"+id);
    }
  

}
