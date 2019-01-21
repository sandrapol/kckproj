import { Magazine } from 'src/app/statics/magazine';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class MagazineService {
    constructor(
        private http: HttpClient
    ) { };

    getMagazineList() {
        return this.http.get('api/magazineList');
    }
    addMagazine(magazine: Magazine) {
        const params = new HttpParams().append('mName', magazine.name).append('mSupply', String(magazine.supply)).
            append('mAvailability', String(magazine.coffeeAvailability));

        return this.http.get('api/addMagazine', { params });
    }
    findMagazine(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/detailsMagazine', { params });
    }
    delete(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/deleteMagazine', { params });
    }
    updateMagazine(magazine: Magazine) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let data={
            "id":magazine.id,
            "name":magazine.name,
            "coffeeAvailability":magazine.coffeeAvailability,
            "supply":magazine.supply
        }

        return this.http.post('api/updateBill', data, {headers});
    }

}