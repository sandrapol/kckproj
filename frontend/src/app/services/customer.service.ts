import { Customer } from './../statics/customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
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

updateCustomer(customer: Customer) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let data={
        "id":customer.id,
        "name":customer.name,
        "forename":customer.forename,
        "telephoneNumber":customer.telephoneNumber,
        "street":customer.street,
        "houseNumber":customer.houseNumber
    }

    return this.http.post('api/updateCustomer', data, {headers});
}

sort(field:string){
    const params = new HttpParams().append('field', field);
    return this.http.get('api/customerSortBy', { params });
}
}