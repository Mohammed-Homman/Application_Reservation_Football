import { Component } from '@angular/core';
import { TerrainService } from '../terrain.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FelicitationComponent } from '../felicitation/felicitation.component';


@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {
  showList = false; 
  listeHeures=["8:00-9:00","9:00-10:00","10:00-11:00","11:00-12:00","16:00-17:00","17:00-18:00","18:00-19:00","19:00-20:00","20:00-21:00","21:00-22:00"];
  selectedDate!: string; 
  selectedHeureBool=false;
  selectedHeure!: string; 
 selected=false;
 visibilityPopup=false;
 plageHoraireSelectionne: string | null = null;
 constructor(private service:TerrainService,private http:HttpClient,private dialog: MatDialog){}
 
 openCongratulationsDialog(): void {
  this.dialog.open(FelicitationComponent);
}

 selectPlageHoraire(plageHoraire: string): void {
  this.selectedHeureBool=true;
  this.plageHoraireSelectionne = plageHoraire;
  
 }
 validerReservation(){
this.visibilityPopup=!this.visibilityPopup;
  console.log(this.plageHoraireSelectionne);
  this.openCongratulationsDialog();
 }
  minDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

 
  toggleList(): void {
    this.service.sendDateReservation(this.selectedDate)
      this.showList = !this.showList; // Inverse la valeur de la variable showList si une date est sélectionnée

  }
  onDateChange(event: any) {
    this.selected=true;
    this.selectedDate = event.target.value;
    console.log(this.selectedDate);
}
}
