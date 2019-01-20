import { Customer } from './../statics/customer';
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

    addCustomer(cust: Customer){   
        const params = new HttpParams().append('mName', cust.name).append('mForename', String(cust.forename)).
        append('mTelephoneNumber', String(cust.telephoneNumber)).append('mStreet',String(cust.street))
        .append('mHouseNumber',String(cust.houseNumber));

        return this.http.get('api/addCustomer', {params});
}
}