import { EditUserComponent } from './editUser.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './common/user.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { DashboardComponent } from './dashboard.component';
import { PageComponent } from './page.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UserListComponent } from './userList.component';
import { ProtectDataGaurd } from './Protectdata.gaurd';
import { AuthGaurd } from './auth.gaurd';


@NgModule({
  declarations: [
    AppComponent,LoginComponent,RegisterComponent,DashboardComponent,PageComponent,EditUserComponent,UserListComponent  ],
  imports: [
    BrowserModule,AdminModule,
    AppRoutingModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [UserService,{provide: LocationStrategy, useClass: HashLocationStrategy},ProtectDataGaurd,AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
