import { Component } from '@angular/core';
import { Resrevation } from '../model/Reservation.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservations:Array<Resrevation>=[];
  public keyword:any="";

  ngOnInit() {
   this.productservice.getReservations().subscribe({
    next:data=>{
      this.reservations=data
    console.log(this.reservations[0]);
    },
    error:err=>{
      console.log(err)}
  });
  }

  constructor(private productservice:ProductService){

  }
  deleteReservation(reservation:Resrevation){
    this.productservice.deleteReservation(reservation).subscribe(
      {
        next:value=>{
        //  this.productservice.getTerrains();
          this.reservations=this.reservations.filter(p=>p.id_reservation!=reservation.id_reservation);
        }
      }
    );
  }

}
