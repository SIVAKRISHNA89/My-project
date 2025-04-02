import { AbstractControl } from "@angular/forms";
export function googleMail(control:AbstractControl){
    if(control.value.includes('@google.com')){
        return null;
    }
    else{
        return{'GoogleMil':'please use Google Mail only'};
    }
}