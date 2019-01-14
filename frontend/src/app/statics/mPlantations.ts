import { Plantation } from "./plantation";


export class PlantationService {
    PlantationList: Plantation[] = [
        { id: 1, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 2, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 3, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 4, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 5, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 6, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 7, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 8, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 9, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 10, name:"Jungle", country: "Brazylia", region: "poludnie" },
        { id: 11, name:"Jungle", country: "Brazylia", region: "poludnie" }
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