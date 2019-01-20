import { Coffee } from './../statics/coffe';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
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

    addCoffee(coffee: Coffee){   
        const params = new HttpParams().append('mName', coffee.name).append('mSpecies', String(coffee.species)).
        append('mType', String(coffee.type)).append('mPrice',String(coffee.price));

        return this.http.get('api/addCoffee', {params});
}
}