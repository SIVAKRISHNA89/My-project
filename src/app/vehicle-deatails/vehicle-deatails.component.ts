import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-deatails',
  templateUrl: './vehicle-deatails.component.html',
  styleUrls: ['./vehicle-deatails.component.css']
})
export class VehicleDeatailsComponent {
  id:number=0;
  vehicle:any;
  constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
      },(err:any)=>{
        alert("internal server error");
      }

    )
_vehicleService.getVehicle(this.id).subscribe(
  (data:any)=>{
    console.log(data);
    this.vehicle=data;

  },(err:any)=>{
    alert("Internal server error");
  }
)
  }

}
