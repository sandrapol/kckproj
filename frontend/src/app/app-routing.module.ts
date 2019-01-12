
import { HomeComponent } from './content/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeListComponent } from './content/coffe-list/coffe-list.component';
import { CoffeeDetailsComponent } from './content/coffee-details/coffee-details.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"coffee",component:CoffeListComponent},
  {path:"details/:id",component: CoffeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
