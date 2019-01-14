import { ForgotComponent } from './forgot/forgot.component';
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
import { AboutComponent } from './content/about/about.component';
import { CustomerListComponent } from './content/customer-list/customer-list.component';
import { CustomerDeatilsComponent } from './content/customer-deatils/customer-deatils.component';
import { RegistrationComponent } from './content/registration/registration.component';
import { LoginComponent } from './content/login/login.component';

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
  {path:"employee/:id",component: EmployeeDetailsComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"newCoffee",component: CoffeeAddComponent},
  {path:"login", component: LoginComponent},
  {path:"forgot",component:ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
