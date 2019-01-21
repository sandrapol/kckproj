import { Plantation } from 'src/app/statics/plantation';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
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

    findPlantation(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/detailsPlantation', { params });
    }
    delete(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/deletePlantation', { params });
    }
    updatePlantation(plantation: Plantation) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let data={
            "id":plantation.id,
            "name":plantation.name,
            "country":plantation.country,
            "region":plantation.region
        }

        return this.http.post('api/updatePlantation', data, {headers});
    }
}
