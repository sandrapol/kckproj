import { Coffee } from './../statics/coffe';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CoffeeService {
    constructor(
        private http: HttpClient
    ) { };

    getCoffeeList() {
        return this.http.get('api/coffeeList');
    }

    addCoffee(coffee: Coffee, id:number){   
        const params = new HttpParams().append('mName', coffee.name).append('mSpecies', String(coffee.species)).
        append('mType', String(coffee.type)).append('mPrice',String(coffee.price)).append('magazineId', String(id));

        return this.http.get('api/addCoffee', {params});
}

findCoffee(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/detailsCoffee', { params });
}
delete(id: number) {
    const params = new HttpParams().append('id', String(id));
    return this.http.get('api/deleteCoffee', { params });
}

updateCoffee(coffee: Coffee) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let data={
        "id":coffee.id,
        "name":coffee.name,
        "species":coffee.species,
        "type":coffee.type,
        "price":coffee.price,
        "magazine":coffee.magazine
    }

    return this.http.post('api/updateCoffee', data, {headers});
}

sort(field:string){
    const params = new HttpParams().append('field', field);
    return this.http.get('api/coffeeSortBy', { params });
}

filter(field:string, min:number,max:number){
    const params = new HttpParams().append('field', field).append('min',String(min)).append('max',String(max));
    return this.http.get('api/filterCoffee', { params });
}
coffeeByMagazines(id: number) {
    const params = new HttpParams().append('magazineId', String(id));
    return this.http.get<Coffee[]>('api/findCoffee', { params });
}

}