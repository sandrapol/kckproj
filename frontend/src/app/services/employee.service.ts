import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
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
delete(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/deleteEmployee', { params });
}

updateEmployee(employee: Employee) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let data={
        "id":employee.id,
        "name":employee.name,
        "forename":employee.forename,
        "position":employee.position,
        "salary":employee.salary,
        "bonus":employee.bonus
    }

    return this.http.post('api/updateEmployee', data, {headers});
}

sort(field:string){
    const params = new HttpParams().append('field', field);
    return this.http.get('api/employeeSortBy', { params });
}

}