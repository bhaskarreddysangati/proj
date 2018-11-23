import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from './register/register.component';
@Injectable()
export class ProtectDataGaurd implements CanDeactivate<RegisterComponent>{
    canDeactivate(
        component:RegisterComponent
    ):Observable<boolean>|Promise<boolean>|boolean {
        
        if(component.access){
            var acs = confirm("discard changes ?");
            console.log(acs);
            return acs;
        }
        else{
            return true;
        }
    }
}