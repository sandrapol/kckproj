import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(
        private http: HttpClient
    ) { };

    getCustomerList() {
        return this.http.get('api/customerList');
    }
}