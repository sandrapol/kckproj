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

    delete(id:number){
      this.loading=true;
      this.serv.delete(id).subscribe(
        elem=> this.employeeList=elem,
        err=> console.log(err),
        ()=> {this.loading=false; }
      )
    }

    setSelected() {
      this.loading=true;
      let e = (document.getElementById("sortDrop")) as HTMLSelectElement;
      let sel = e.selectedIndex;
      var opt = e.options[sel];
      this.serv.sort(opt.value).subscribe(
        elem=> this.employeeList=elem,
        err=> console.log(err),
        ()=> {this.loading=false; }
      )
    }
  

}
