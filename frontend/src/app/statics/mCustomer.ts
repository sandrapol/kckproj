import { Customer } from './customer';

export const CustomerList: Customer[] = [
    {id: 1,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 2,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 3,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 4,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 5,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 6,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 7,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 8,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 9,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 10,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
{id: 11,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",}
];
export class CustomerService {
    CustomerList: Customer[] = [
        {id: 1,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 2,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 3,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 4,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 5,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 6,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 7,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 8,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 9,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 10,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",},
    {id: 11,name:"Kowalski",forename: "Jan",telephoneNumber:123456789,street:"Zimowa",houseNumber:1,city:"Warszawa",}
    ];
    constructor() { }
    addCustomer(cof:Customer) {
        this.CustomerList.push(cof);
    }
    deleteCustomer(cof:Customer) {
        this.CustomerList=this.CustomerList.filter(elem=> elem.id!=cof.id);
    }
    findCustomer(id:number) {
        let customer
        for(let elem of this.CustomerList){
            if(elem.id==id){
                customer=elem;
            }
          }
          return customer;
    }
}
