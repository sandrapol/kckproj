import { Delivery } from './../statics/delivery';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DeliveryService {
    constructor(
        private http: HttpClient
    ) { };

    getDeliveryList() {
        return this.http.get('api/deliveryList');
    }

    addDelivery(delivery: Delivery, plantId:number, magId:number){   
        const params = new HttpParams().append('mConveyance', delivery.conveyance).append('plantationId', String(plantId)).
        append('magazineId', String(magId));

        return this.http.get('api/addDelivery', {params});
}

findDelivery(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/detailsDelivery', { params });
}
delete(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/deleteDelivery', { params });
}


sort(field:string){
    const params = new HttpParams().append('field', field);
    return this.http.get('api/deliverySortBy', { params });
}


}