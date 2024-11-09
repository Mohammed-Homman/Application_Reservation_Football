import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ConnectComponentComponent } from './connect-component/connect-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReserverComponent } from './reserver/reserver.component';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { RegistreComponent } from './registre/registre.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FelicitationComponent } from './felicitation/felicitation.component';
import { MatDialogModule } from '@angular/material/dialog'; // Importez MatDialogModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    ConnectComponentComponent,
    ReserverComponent,
    ReservationPageComponent,
    RegistreComponent,
    FelicitationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MatDatepickerModule,
   MatFormFieldModule,
   MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
