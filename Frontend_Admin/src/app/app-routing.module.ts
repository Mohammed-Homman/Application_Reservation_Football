import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path:"Users",component:HomeComponent},
  {path:"Terrains",component:ProductsComponent},
  {path:"Réservations",component:ReservationComponent},
  {path:"new-terrain",component:NewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
