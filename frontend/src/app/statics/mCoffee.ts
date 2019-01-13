import { Coffee } from "./coffe";

export class CoffeeService {
    CoffeeList: Coffee[] = [
        { id: 1, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 2, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 3, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 4, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 5, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 6, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 7, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 8, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 9, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 10, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 11, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 12, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 13, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 14, name: "przykad", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
    ];
    constructor() { }
    addCoffee(cof:Coffee) {
        this.CoffeeList.push(cof);
    }
    deleteCoffee(cof:Coffee) {
        this.CoffeeList=this.CoffeeList.filter(elem=> elem.id!=cof.id);
    }
    findCoffee(id:number) {
        let coffee
        for(let elem of this.CoffeeList){
            if(elem.id==id){
              coffee=elem;
            }
          }
          return coffee;
    }
}