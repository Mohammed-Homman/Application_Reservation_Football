import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { Terrain } from '../model/Terrain.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  terrains:Array<Terrain>=[];
  public keyword:any="";

  ngOnInit() {
   this.productservice.getTerrains().subscribe({
    next:data=>{
      this.terrains=data},
    error:err=>{
      console.log(err)}
  });
  }

  constructor(private productservice:ProductService){

  }
  deleteTerrain(terrain:Terrain){
    this.productservice.deleteTerrain(terrain).subscribe(
      {
        next:value=>{
        //  this.productservice.getTerrains();
          this.terrains=this.terrains.filter(p=>p.id!=terrain.id);
        }
      }
    );
  }

 /* productEtat(product:any){
    this.productservice.checkProduct(product).subscribe(
        {
          next:updatedproduct=>{product.checked=!product.checked;}
        });
     // product.checked=!(product.checked);
    }
    searchProduct(){
      this.productservice.searchProduct(this.keyword).subscribe({
        next:value=>{
          this.products=value;
        },
        error:err=>console.log(err)
      })
    }*/

  
  /*------------------THIS SECTION USE THE SERVICE FOR COMMUNICATION WITH BACK END ----------------*/
 /* products:Array<Product>=[];
  public keyword:any="";

  ngOnInit() {
   this.productservice.getProducts().subscribe({
    next:data=>{
      this.products=data},
    error:err=>{
      console.log(err)}
  });
  }

  constructor(private productservice:ProductService){

  }
  deleteProduct(product:Product){
    this.productservice.deleteProduct(product).subscribe(
      {
        next:value=>{
          //this.productservice.getProducts();
          this.products=this.products.filter(p=>p.id!=product.id);
        }
      }
    );
  }

  productEtat(product:any){
    this.productservice.checkProduct(product).subscribe(
        {
          next:updatedproduct=>{product.checked=!product.checked;}
        });
     // product.checked=!(product.checked);
    }
    searchProduct(){
      this.productservice.searchProduct(this.keyword).subscribe({
        next:value=>{
          this.products=value;
        },
        error:err=>console.log(err)
      })
    }
  */


    /*-----------------the end of this demarche--------------------------------*/

/*--------------------AND THIS SECTION COMMUNICATE WITH THE BACK END WITHOUT USING A SERVICE -----------------------------------------------------*/

  /*Injection des dépendances*/
  /*
  constructor(private http:HttpClient ){
    
  }
  ngOnInit() {
    this.http.get<Array<any>>("http://localhost:8089/products")
    .subscribe({
      next:data=>{
        this.products=data},
      error:err=>{
        console.log(err)}
    });
  }

productEtat(product:any){
this.http.patch("http://localhost:8089/products/"+product.id,{checked:!product.checked}).subscribe(
    {
      next:updatedproduct=>{product.checked=!product.checked;}
    });
 // product.checked=!(product.checked);
}*/

}
