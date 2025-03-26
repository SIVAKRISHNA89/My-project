import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { CardComponent } from './card/card.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
        {path:'vehicle',component:VehicleComponent},
        {path:'parent',component:ParentComponent},
        {path:'sibling',component:Sibling1Component},
        {path:'accounts',component:AccountsComponent},
        {path:'pinterest',component:PinterestComponent},
        {path:'flipkart',component:FlipkartComponent},
        {path:'mail',component:MailComponent},
        {path:'card',component:CardComponent},
        {path:'create-user',component:CreateUserComponent},
        {path:'vehicle-details/:id',component:VehicleDetailsComponent},
        {path:'create-vehicle',component:CreateVehicleComponent},
        {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  ]}, 
     
  {path:'login',component:LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
