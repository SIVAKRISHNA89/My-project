import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDeatailsComponent } from './vehicle-deatails/vehicle-deatails.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
        {path:'vehicle',component:VehicleComponent},
        {path:'accounts',component:AccountsComponent},
        {path:'pinterest',component:PinterestComponent},
        {path:'flipkart',component:FlipkartComponent},
        {path:'mail',component:MailComponent},
        {path:'create-user',component:CreateUserComponent},
        {path:'vehicle-details/:id',component:VehicleDeatailsComponent},


    
  ]}, 
     
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
