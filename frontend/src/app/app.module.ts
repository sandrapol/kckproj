import { HarvestDetailsComponent } from './content/harvest-details/harvest-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
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
import { EmployeeAddComponent } from './content/employee-add/employee-add.component';
import { CustomerAddComponent } from './content/customer-add/customer-add.component';
import { MagazineAddComponent } from './content/magazine-add/magazine-add.component';
import { PlantationAddComponent } from './content/plantation-add/plantation-add.component';
import { MagazineDetailsComponent } from './content/magazine-details/magazine-details.component';
import { PlantationDetailsComponent } from './content/plantation-details/plantation-details.component';
import { LoadingComponent } from './content/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { BillDetailsComponent } from './content/bill-details/bill-details.component';
import { BillAddComponent } from './content/bill-add/bill-add.component';
import { Ng5SliderModule } from 'ng5-slider';
import { CityListComponent } from './content/city-list/city-list.component';
import { CityAddComponent } from './content/city-add/city-add.component';
import { HarvestListComponent } from './content/harvest-list/harvest-list.component';
import { HarvestAddComponent } from './content/harvest-add/harvest-add.component';
import { DeliveryListComponent } from './content/delivery-list/delivery-list.component';
import { DeliveryAddComponent } from './content/delivery-add/delivery-add.component';


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
    ForgotComponent,
    EmployeeAddComponent,
    CustomerAddComponent,
    MagazineAddComponent,
    PlantationAddComponent,
    MagazineDetailsComponent,
    PlantationDetailsComponent,
    LoadingComponent,
    BillDetailsComponent,
    BillAddComponent,
    CityListComponent,
    CityAddComponent,
    HarvestListComponent,
    HarvestDetailsComponent,
    HarvestAddComponent,
    DeliveryListComponent,
    DeliveryAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
