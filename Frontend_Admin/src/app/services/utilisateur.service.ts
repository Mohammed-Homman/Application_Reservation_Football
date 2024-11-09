import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  constructor(private http:HttpClient) { }

  saveUtilisateur(utilisateur: Utilisateur):Observable<Utilisateur> {
    return  this.http.post<Utilisateur>("http://localhost:8089/Utilisateurs/",utilisateur);  }

  

  public getUtilisateurs():Observable<any>{
    return this.http.get<Array<any>>("http://localhost:8080/utilisateurs");

  }
 
  
}
