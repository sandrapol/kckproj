import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from '../statics/employee';
@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(
        private http: HttpClient
    ) { };

    getEmployeeList() {
        return this.http.get('api/employeeList');
    }

    addEmployee(employee: Employee){   
        const params = new HttpParams().append('mName', employee.name).append('mForename', String(employee.forename)).
        append('mPosition', String(employee.position)).append('mSalary',String(employee.salary))
        .append('mBonus',String(employee.bonus));

        return this.http.get('api/addEmployee', {params});
}

findEmployee(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/detailsEmployee', { params });
}

}