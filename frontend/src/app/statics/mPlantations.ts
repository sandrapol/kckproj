import { Plantation } from "./plantation";


export class PlantationService {
    PlantationList: Plantation[] = [
        { id: 1, country: "Brazylia", region: "poludnie" },
        { id: 2, country: "Brazylia", region: "poludnie" },
        { id: 3, country: "Brazylia", region: "poludnie" },
        { id: 4, country: "Brazylia", region: "poludnie" },
        { id: 5, country: "Brazylia", region: "poludnie" },
        { id: 6, country: "Brazylia", region: "poludnie" },
        { id: 7, country: "Brazylia", region: "poludnie" },
        { id: 8, country: "Brazylia", region: "poludnie" },
        { id: 9, country: "Brazylia", region: "poludnie" },
        { id: 10, country: "Brazylia", region: "poludnie" },
        { id: 11, country: "Brazylia", region: "poludnie" }
    ]
    constructor() { }
    addCoffee(cof:Plantation) {
        this.PlantationList.push(cof);
    }
    deleteCoffee(cof:Plantation) {
        this.PlantationList=this.PlantationList.filter(elem=> elem.id!=cof.id);
    }
    findCoffee(id:number) {
        let plantation
        for(let elem of this.PlantationList){
            if(elem.id==id){
                plantation=elem;
            }
          }
          return plantation;
    }
}