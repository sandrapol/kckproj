import { Harvest } from './../statics/harvest';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class HarvestService {
    constructor(
        private http: HttpClient
    ) { };

    getHarvestList() {
        return this.http.get('api/harvestList');
    }

    addHarvest(harvest: Harvest, id: number){   
        const params = new HttpParams().append('mQuality', String(harvest.quality)).append('mQuantity',String(harvest.quantity)).append('plantationId',String(id));

        return this.http.get('api/addHarvest', {params});
}

findHarvest(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/detailsHarvest', { params });
}
delete(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/deleteHarvest', { params });
}


sort(field:string){
    const params = new HttpParams().append('field', field);
    return this.http.get('api/harvestSortBy', { params });
}


}