import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class BillService {
    constructor(
        private http: HttpClient
    ) { };

    getBillList() {
        return this.http.get('api/billList');
    }
}