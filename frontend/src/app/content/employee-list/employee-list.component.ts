import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/statics/employee';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private employeeList:any;
  loading:boolean= true;
  constructor(private router:Router, private serv:EmployeeService) { }

  ngOnInit() {
    this.serv.getEmployeeList().subscribe(
      elem=> this.employeeList= elem,
      err=> console.log(err),
      ()=> this.loading=false
    )
  }
    showDetails(id:number){
      this.router.navigateByUrl("/employee/"+id);
    }
  

}
