import { City } from './../statics/city';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CityService {
    constructor(
        private http: HttpClient
    ) { };

    getCityList() {
        return this.http.get('api/cityList');
    }

    addCity(city: City){   
        const params = new HttpParams().append('mName', city.name).append('mVoivodeship', String(city.voivodeship)).append('mZipCode',String(city.ZIPcode));

        return this.http.get('api/addCity', {params});
}

findCity(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/detailsCity', { params });
}
delete(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/deleteCity', { params });
}

updateCity(city: City) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let data={
        "id":city.id,
        "voivodeship":city.voivodeship,
        "ZIPcode":city.ZIPcode
    }

    return this.http.post('api/updateCity', data, {headers});
}

sort(field:string){
    const params = new HttpParams().append('field', field);
    return this.http.get('api/citySortBy', { params });
}


}