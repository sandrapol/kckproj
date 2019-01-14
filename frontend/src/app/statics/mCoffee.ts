import { Coffee } from "./coffe";

export class CoffeeService {
    CoffeeList: Coffee[] = [
        { id: 1, name: "kawunia1", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 2, name: "kawunia2", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 3, name: "kawunia3", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 4, name: "kawunia4", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 5, name: "kawunia5", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 6, name: "kawunia6", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 7, name: "kawunia7", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 8, name: "kawunia8", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 9, name: "kawunia9", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 10, name: "kawunia10", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 11, name: "kawunia11", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 12, name: "kawunia12", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 13, name: "kawunia13", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
        { id: 14, name: "kawunia14", origin: "brazylia", description: "mocna i intensywna", type: "arabica", price: 50 },
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