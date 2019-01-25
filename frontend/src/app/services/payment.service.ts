import { Payment } from 'src/app/statics/payment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    constructor(
        private http: HttpClient
    ) { };

    getPaymentList() {
        return this.http.get('api/paymentList');
    }
    addPayment(payment: Payment) {
        const params = new HttpParams().append('mTypeOfPayment', payment.typeOfPayment).append('mProofOfPayment', String(payment.proofOfPayment));

        return this.http.get('api/addPayment', { params });
    }
    findPayment(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/detailsPayment', { params });
    }
    delete(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/deletePayment', { params });
    }
    updatePayment(payment: Payment) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let data={
            "id":payment.id,
            "typeOfPayment":payment.typeOfPayment,
            "proofOfPayment":payment.proofOfPayment
        }

        return this.http.post('api/updateMagazine', data, {headers});
    }

    sort(field:string){
        const params = new HttpParams().append('field', field);
        return this.http.get('api/paymentSortBy', { params });
    }

    filter(field:string, min:number,max:number){
        const params = new HttpParams().append('field', field).append('min',String(min)).append('max',String(max));
        return this.http.get('api/filterPayment', { params });
    }

}