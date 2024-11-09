import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { Terrain } from '../model/Terrain.model';
import { Resrevation } from '../model/Reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  saveProduct(product: Product):Observable<Product> {
    return  this.http.post<Product>("http://localhost:8089/products/",product);  }


    saveTerrain(terrain: Terrain):Observable<any> {
      return  this.http.post<any>("http://localhost:8080/terrains",terrain); 
     }
  constructor(private http:HttpClient) { }

  public getTerrains():Observable<any>{
    return this.http.get<Array<any>>("http://localhost:8080/terrains");

  }
  public getReservations():Observable<any>{
    return this.http.get<Array<any>>("http://localhost:8080/reservations");

  }
  public searchProduct(keyword:any):Observable<any>{
    console.log(keyword);
    return this.http.get<Array<any>>("http://localhost:8089/products?name_like="+keyword);


  }
  public checkProduct(product:any):Observable<any>{
   return  this.http.patch("http://localhost:8089/products/"+product.id,{checked:!product.checked});

  }
  public deleteTerrain(terrain:Terrain){
    return  this.http.delete<any>("http://localhost:8080/terrains/"+terrain.id);
 
   }
  public deleteReservation(reservation:Resrevation){
    return  this.http.delete<any>("http://localhost:8080/reservations/"+reservation.id_reservation);
 
   }
  /*
  saveProduct(product: Product):Observable<Product> {
    return  this.http.post<Product>("http://localhost:8089/products/",product);  }

  constructor(private http:HttpClient) { }

  public getProducts():Observable<any>{
    return this.http.get<Array<any>>("http://localhost:8080/terrains");

  }
  public searchProduct(keyword:any):Observable<any>{
    console.log(keyword);
    return this.http.get<Array<any>>("http://localhost:8089/products?name_like="+keyword);


  }
  public checkProduct(product:any):Observable<any>{
   return  this.http.patch("http://localhost:8089/products/"+product.id,{checked:!product.checked});

  }
  public deleteProduct(product:Product){
    return  this.http.delete<any>("http://localhost:8089/products/"+product.id);
 
   }*/
}
