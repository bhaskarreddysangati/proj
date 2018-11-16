import { Component1 } from './c1.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componentlogin } from './login.component';
import { ComponentRegister } from './Register.component';
import { Component2 } from './c2.component';



@NgModule({
  declarations: [
    AppComponent,
    Componentlogin,ComponentRegister,Component1,Component2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
