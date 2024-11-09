import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
actions :Array<any>=[
  {title:"Users",route:"/Users",icon:"bi bi-person text-success"},
  {title:"Réservations",route:"/Réservations",icon:"bi bi-arrow-down-up text-success"},
  {title:"Terrains",route:"/Terrains",icon:"bi bi-arrow-down-up text-success"},
  {title:"New Terrain",route:"/new-terrain",icon:"bi bi-plus-circle text-success"}
];
currentAction:any;
setCurrentAction(a:any){
  this.currentAction=a;
}
}
