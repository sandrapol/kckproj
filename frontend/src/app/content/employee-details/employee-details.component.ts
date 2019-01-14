import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/statics/employee';
import { EmployeeService } from 'src/app/statics/mEployee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private empServ= new EmployeeService();
  private employeeList:Employee[]= this.empServ.EmployeeList;
  currentId: number;
  employee:Employee;
  loading=true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.employee=null;
    this.currentId=Number(this.route.snapshot.params['id']);
    this.employee=this.empServ.findEmployee(this.currentId);
  }

}
