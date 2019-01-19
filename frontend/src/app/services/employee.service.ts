import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
}