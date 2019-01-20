import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
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
}