import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

  constructor(private http:HttpClient) { }

  getTerrain():Observable<any>{
    return this.http.get<Array<any>>("http://localhost:8080/terrains");
   }
  sendDateReservation(date:String){
   return this.http.post("http://localhost:9192/records/importRecords", date);
  }
  getDisponibleHours(){
    return this.http.get<any>("http://localhost:9192/records/importRecords");
   }
  getRecords()
  {
    return this.http.get<any>("http://localhost:9192/records/month");

  }
}
