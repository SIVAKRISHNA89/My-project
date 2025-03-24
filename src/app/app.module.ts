import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailComponent } from './mail/mail.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { AccountsComponent } from './accounts/accounts.component';
import { BmiComponent } from './bmi/bmi.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { VehicleDeatailsComponent } from './vehicle-deatails/vehicle-deatails.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    DashboardComponent,
    MailComponent,
    FlipkartComponent,
    PinterestComponent,
    AccountsComponent,
    BmiComponent,
    CreateUserComponent,
    VehicleDeatailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
