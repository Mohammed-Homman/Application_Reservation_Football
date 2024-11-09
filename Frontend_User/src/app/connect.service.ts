import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http:HttpClient) { }

  saveUser(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:8080/utilisateurs", user);
   }
   verifierUser(email:string,password:string ):Observable<User>{
    return this.http.post<User>('http://localhost:8080/utilisateurs/verifier', { email, password });
   }
   getUsers():Observable<any>{
    return this.http.get<Array<any>>("http://localhost:8080/utilisateurs");
   }
  sendDateReservation(user:User){
   return this.http.post("http://localhost:8080/utilisateurs", user);
  }
  getDisponibleHours(){
    return this.http.get<any>("http://localhost:8080/utilisateurs");
   }
  getRecords()
  {
    return this.http.get<any>("http://localhost:9192/records/month");

  }
}
