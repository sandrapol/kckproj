import { Bill } from './../statics/bill';
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

    addBill(bill: Bill){   
        const params = new HttpParams().append('mGrossValue', String(bill.grossValue)).append('mDiscount', String(bill.discount));

        return this.http.get('api/addBill', {params});
}

findBill(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/detailsBill', { params });
}
}