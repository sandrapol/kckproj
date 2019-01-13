import { HomeComponent } from './content/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeListComponent } from './content/coffe-list/coffe-list.component';
import { CoffeeDetailsComponent } from './content/coffee-details/coffee-details.component';
import { EmployeeListComponent } from './content/employee-list/employee-list.component';
import { BillListComponent } from './content/bill-list/bill-list.component';
import { MagazineListComponent } from './content/magazine-list/magazine-list.component';
import { PlantationListComponent } from './content/plantation-list/plantation-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"coffee",component:CoffeListComponent},
  {path:"details/:id",component: CoffeeDetailsComponent},
  {path:"bills", component:BillListComponent},
  {path:"employeeList", component:EmployeeListComponent},
  {path:"magazines", component:MagazineListComponent},
  {path:"plantations", component: PlantationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
