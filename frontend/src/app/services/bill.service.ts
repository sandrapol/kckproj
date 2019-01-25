import { Bill } from './../statics/bill';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sale } from '../statics/sale';
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

    addBill(bill: Bill, sales: Sale[], idCust: number, idEmployee:number) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let data = {
                "mDiscount": bill.discount,
                "mGrossValue": bill.grossValue,
                "sales": sales,
                "custId": idCust,
                "employeeId":idEmployee
        }
        console.log(data);
        return this.http.post('api/addBill', data, { headers });
    }
    getSales(id: number) {
        const params = new HttpParams().append('billId', String(id));
        return this.http.get<Sale[]>('api/findSales', { params });
    }

    findBill(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/detailsBill', { params });
    }
    delete(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/deleteBill', { params });
    }

    updateBill(bill: Bill) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let data = {
            "id": bill.id,
            "grossValue": bill.grossValue,
            "netValue": bill.netValue,
            "vatValue": bill.vatValue,
            "discount": bill.discount
        }

        return this.http.post('api/updateBill', data, { headers });
    }

    sort(field: string) {
        const params = new HttpParams().append('field', field);
        return this.http.get('api/billSortBy', { params });
    }

}