
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

  constructor(private route: ActivatedRoute, private serv: EmployeeService) { }

  ngOnInit() {
    this.currentId=Number(this.route.snapshot.params['id']);
    this.serv.findEmployee(this.currentId).subscribe(
      elem=>this.employee=elem,
      err=>console.log(err)
    );
  }

}
