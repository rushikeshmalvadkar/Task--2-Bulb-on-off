import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DataInformationComponent } from './data-information/data-information.component';
import {Routes,RouterModule} from '@angular/router';





 const routes: Routes = [
  {path:"" , redirectTo:"dataInformation", pathMatch: 'full'}, // localhost:4200/
   {path:"dataInformation" , component:DataInformationComponent}, // localhost:4200/dataInformation
   {path:"form" , component: FormComponent} ,// localhost:4200/form
   {path:"form/:id" , component: FormComponent} // localhost:4200/form/1
 ]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DataInformationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)



  ],
  providers: [FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
