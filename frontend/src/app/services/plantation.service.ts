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
}