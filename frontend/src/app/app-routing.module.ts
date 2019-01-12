import { HomeComponent } from './content/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeListComponent } from './content/coffe-list/coffe-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"coffee",component:CoffeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
