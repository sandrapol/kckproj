import { CityListComponent } from './content/city-list/city-list.component';
import { DeliveryListComponent } from './content/delivery-list/delivery-list.component';
import { CityAddComponent } from './content/city-add/city-add.component';
import { HarvestAddComponent } from './content/harvest-add/harvest-add.component';
import { BillAddComponent } from './content/bill-add/bill-add.component';
import { BillDetailsComponent } from './content/bill-details/bill-details.component';
import { EmployeeAddComponent } from './content/employee-add/employee-add.component';
import { MagazineAddComponent } from './content/magazine-add/magazine-add.component';
import { DeliveryAddComponent } from './content/delivery-add/delivery-add.component';
import { PlantationAddComponent } from './content/plantation-add/plantation-add.component';
import { CustomerAddComponent } from './content/customer-add/customer-add.component';
import { ForgotComponent } from './content/forgot/forgot.component';
import { CoffeeAddComponent } from './content/coffee-add/coffee-add.component';
import { EmployeeDetailsComponent } from './content/employee-details/employee-details.component';
import { HomeComponent } from './content/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeListComponent } from './content/coffe-list/coffe-list.component';
import { CoffeeDetailsComponent } from './content/coffee-details/coffee-details.component';
import { EmployeeListComponent } from './content/employee-list/employee-list.component';
import { BillListComponent } from './content/bill-list/bill-list.component';
import { MagazineListComponent } from './content/magazine-list/magazine-list.component';
import { PlantationListComponent } from './content/plantation-list/plantation-list.component';
import { PlantationDetailsComponent } from './content/plantation-details/plantation-details.component';
import { AboutComponent } from './content/about/about.component';
import { CustomerListComponent } from './content/customer-list/customer-list.component';
import { CustomerDeatilsComponent } from './content/customer-deatils/customer-deatils.component';
import { RegistrationComponent } from './content/registration/registration.component';
import { LoginComponent } from './content/login/login.component';
import { MagazineDetailsComponent } from './content/magazine-details/magazine-details.component';
import { HarvestDetailsComponent } from './content/harvest-details/harvest-details.component';
import { HarvestListComponent } from './content/harvest-list/harvest-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"coffee",component:CoffeListComponent},
  {path:"details/:id",component: CoffeeDetailsComponent},
  {path:"bills", component:BillListComponent},
  {path:"employees", component:EmployeeListComponent},
  {path:"magazines", component:MagazineListComponent},
  {path:"plantations", component: PlantationListComponent},
  {path:"about", component:AboutComponent},
  {path:"customers", component: CustomerListComponent},
  {path:"customer/:id", component:CustomerDeatilsComponent},
  {path:"bills/:id", component:BillDetailsComponent},
  {path:"employee/:id",component: EmployeeDetailsComponent},
  {path:"magazine/:id",component: MagazineDetailsComponent},
  {path:"plantation/:id",component: PlantationDetailsComponent},
  {path:"harvest/:id",component: HarvestDetailsComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"newCoffee",component: CoffeeAddComponent},
  {path:"login", component: LoginComponent},
  {path:"forgot",component:ForgotComponent},
  {path:"newCustomer",component: CustomerAddComponent},
  {path:"newCity",component: CityAddComponent},
  {path:"newPlantation",component: PlantationAddComponent},
  {path:"newMagazine",component: MagazineAddComponent},
  {path:"newEmployee",component:EmployeeAddComponent},
  {path:"newBill",component:BillAddComponent},
  {path:"newDelivery",component:DeliveryAddComponent},
  {path:"newHarvest",component:HarvestAddComponent},
  {path:"cities",component:CityListComponent},
  {path:"harvest",component:HarvestListComponent},
  {path:"deliveries",component:DeliveryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
