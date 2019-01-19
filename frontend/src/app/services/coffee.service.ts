import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CoffeeService {
    constructor(
        private http: HttpClient
    ) { };

    getCoffeeList() {
        return this.http.get('api/coffeeList');
    }
}