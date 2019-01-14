import { Magazine } from "./magazine";


export class MagazineService {
    MagazineList: Magazine[] =[
        {id:1, name:"magazyn", coffeeAvailability: true, supply: 500},
        {id:2, name:"magazyn", coffeeAvailability: true, supply: 900},
        {id:3, name:"magazyn", coffeeAvailability: false, supply: 0},
        {id:4, name:"magazyn", coffeeAvailability: true, supply: 50},
        {id:5, name:"magazyn", coffeeAvailability: true, supply: 1000},
        {id:6, name:"magazyn", coffeeAvailability: true, supply: 123},
        {id:7, name:"magazyn", coffeeAvailability: true, supply: 432},
        {id:8, name:"magazyn", coffeeAvailability: false, supply: 0},
        {id:9, name:"magazyn", coffeeAvailability: true, supply: 4678},
        {id:10, name:"magazyn", coffeeAvailability: true, supply: 9873},
    ]
    constructor() { }
    addMagazine(cof:Magazine) {
        this.MagazineList.push(cof);
    }
    deleteCoffee(cof:Magazine) {
        this.MagazineList=this.MagazineList.filter(elem=> elem.id!=cof.id);
    }
    findCoffee(id:number) {
        let magazine
        for(let elem of this.MagazineList){
            if(elem.id==id){
                magazine=elem;
            }
          }
          return magazine;
    }
}