import { Plantation } from 'src/app/statics/plantation';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RegularPost } from '../statics/regularPost';
@Injectable({
    providedIn: 'root'
})
export class RegularService {
    constructor(
        private http: HttpClient
    ) { };

    getRegularPostList() {
        return this.http.get('api/regularPostList');
    }

    addRegularPost(regularPost: RegularPost){   
        const params = new HttpParams().append('startTime', String(regularPost.startTime)).append('endTime', String(regularPost.endTime)).
        append('daysNumber', String(regularPost.dayNumnber));

        return this.http.get('api/addRegularPost', {params});
    }

    findRegularPost(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/detailsRegularPost', { params });
    }
    delete(id: number) {
        const params = new HttpParams().append('id', String(id));
        return this.http.get('api/deleteRegularPost', { params });
    }
    updateRegularPost(regular: RegularPost) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let data={
            "id":regular.id,
            "startTime":regular.startTime,
            "endTime":regular.endTime,
            "daysNumber":regular.dayNumnber,
            "employee": regular.employee
        }

        return this.http.post('api/updateRegularPost', data, {headers});
    }

    sort(field:string){
        const params = new HttpParams().append('field', field);
        return this.http.get('api/regularPostSortBy', { params });
    }
}
