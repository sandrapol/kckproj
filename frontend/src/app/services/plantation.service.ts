import { Plantation } from 'src/app/statics/plantation';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class PlantationService {
    constructor(
        private http: HttpClient
    ) { };

    getPlantationList() {
        return this.http.get('api/plantationList');
    }

    addPlantation(plantation: Plantation){   
        const params = new HttpParams().append('mName', plantation.name).append('mCountry', String(plantation.country)).
        append('mRegion', String(plantation.region));

        return this.http.get('api/addPlantation', {params});
}
}