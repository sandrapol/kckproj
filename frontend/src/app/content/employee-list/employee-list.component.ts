import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/statics/employee';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/statics/mEployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private empServ= new EmployeeService();
  private employeeList:Employee[]=this.empServ.EmployeeList;

  constructor(private router:Router) { }

  ngOnInit() {
  }
    showDetails(id:number){
      this.router.navigateByUrl("/employee/"+id);
    }
  

}
