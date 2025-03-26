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
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { LoginComponent } from './login/login.component';

import { CardComponent } from './card/card.component';
import { LogoutComponent } from './logout/logout.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { TextAreaComponent } from './text-area/text-area.component';

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
    VehicleDetailsComponent,
    CreateVehicleComponent,
    LoginComponent,
    
    CardComponent,
         LogoutComponent,
         CardDetailsComponent,
         CreateCardComponent,
         Sibling1Component,
         Sibling2Component,
         ParentComponent,
         ChildComponent,
         RatingComponent,
         TextAreaComponent
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
