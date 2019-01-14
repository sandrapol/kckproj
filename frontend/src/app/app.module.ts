import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './content/home/home.component';
import { CoffeListComponent } from './content/coffe-list/coffe-list.component';
import { FooterComponent } from './footer/footer.component';
import { CoffeeDetailsComponent } from './content/coffee-details/coffee-details.component';
import { EmployeeListComponent } from './content/employee-list/employee-list.component';
import { PlantationListComponent } from './content/plantation-list/plantation-list.component';
import { MagazineListComponent } from './content/magazine-list/magazine-list.component';
import { BillListComponent } from './content/bill-list/bill-list.component';
import { AboutComponent } from './content/about/about.component';
import { CustomerListComponent } from './content/customer-list/customer-list.component';
import { CustomerDeatilsComponent } from './content/customer-deatils/customer-deatils.component';
import { EmployeeDetailsComponent } from './content/employee-details/employee-details.component';
import { RegistrationComponent } from './content/registration/registration.component';
import { CoffeeAddComponent } from './content/coffee-add/coffee-add.component';
import { LoginComponent } from './content/login/login.component';
import { ForgotComponent } from './content/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CoffeListComponent,
    FooterComponent,
    CoffeeDetailsComponent,
    EmployeeListComponent,
    PlantationListComponent,
    MagazineListComponent,
    BillListComponent,
    AboutComponent,
    CustomerListComponent,
    CustomerDeatilsComponent,
    EmployeeDetailsComponent,
    RegistrationComponent,
    CoffeeAddComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
