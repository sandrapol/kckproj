import { Employee } from "./employee";


  
export class EmployeeService {
    EmployeeList: Employee[] = [
        { id: 1, forename: "Jan", name: "Piotrowski", position: "prezes", salary: 100, bonus: 0, regularPost: "pelny etat" },
        { id: 2, forename: "Sandra", name: "Polowianiuk", position: "prezes", salary: 100000, bonus:100, regularPost: "pelny etat" },
        { id: 3, forename: "Jan", name: "Kowalski", position: "sprzedawca", salary: 5000, bonus: 180, regularPost: "pelny etat" },
        { id: 4, forename: "Jan", name: "Kowalski", position: "sprzedawca", salary: 5000, bonus: 180, regularPost: "pelny etat" },
        { id: 5, forename: "Jan", name: "Kowalski", position: "sprzedawca", salary: 5000, bonus: 180, regularPost: "pelny etat" },
        { id: 6, forename: "Jan", name: "Kowalski", position: "sprzedawca", salary: 5000, bonus: 180, regularPost: "pelny etat" },
        { id: 7, forename: "Jan", name: "Kowalski", position: "sprzedawca", salary: 5000, bonus: 180, regularPost: "pelny etat" },
        { id: 8, forename: "Jan", name: "Kowalski", position: "sprzedawca", salary: 5000, bonus: 180, regularPost: "pelny etat" },
        { id: 9, forename: "Jan", name: "Kowalski", position: "sprzedawca", salary: 5000, bonus: 180, regularPost: "pelny etat" },
        { id: 10,forename: "Jan", name: "Kowalski", position: "sprzedawca", salary: 5000, bonus: 180, regularPost: "pelny etat" }
    ]
    constructor() { }
    addEmployee(cof:Employee) {
        this.EmployeeList.push(cof);
    }
    deleteEmployee(cof:Employee) {
        this.EmployeeList=this.EmployeeList.filter(elem=> elem.id!=cof.id);
    }
    findEmployee(id:number) {
        let employee
        for(let elem of this.EmployeeList){
            if(elem.id==id){
                employee=elem;
            }
          }
          return employee;
    }
}