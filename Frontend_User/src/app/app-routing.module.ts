import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponentComponent } from './connect-component/connect-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ReserverComponent } from './reserver/reserver.component';
import { RegistreComponent } from './registre/registre.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';


const routes: Routes = [
  {path:"reserver",component:ReserverComponent},
  {path:"reservation",component:ReservationPageComponent},
  {path:"",component:HomeComponentComponent},
  {path:"home",component:HomeComponentComponent},
  {path:"register",component:RegistreComponent},
  { path: 'connect', component:ConnectComponentComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
