import { CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PageComponent } from './page.component';
import { DashboardComponent } from "./dashboard.component";
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './editUser.component';
import { UserListComponent } from './userList.component';
import {ProtectDataGaurd} from './Protectdata.gaurd';
import { AuthGaurd } from './auth.gaurd';


export const routes = [
    {path:"dashboard",component:DashboardComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent,CanActivate:[AuthGaurd]},
    {path:"page",component:PageComponent},
    {path:"editUser/:userId",component:EditUserComponent,CanDeactivate:[ProtectDataGaurd]},
    {path:"userList",component:UserListComponent},
 

    {path:"",component:PageComponent}
]