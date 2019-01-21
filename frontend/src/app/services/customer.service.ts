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
        append('mPhoneNumber', String(cust.telephoneNumber)).append('mStreet',String(cust.street))
        .append('mHouseNumber',String(cust.houseNumber));

        return this.http.get('api/addCustomer', {params});
}

findCustomer(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/detailsCustomer', { params });
}
delete(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/deleteCustomer', { params });
}
}