import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../model/utilisateur.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  utilisateurs:Array<Utilisateur>=[];
  public keyword:any="";

  /*------------------THIS SECTION USE THE SERVICE FOR COMMUNICATION WITH BACK END ----------------*/
  ngOnInit() {
   this.utilisateurservice.getUtilisateurs().subscribe({
    next:data=>{
      this.utilisateurs=data},
    error:err=>{
      console.log(err)}
  });
  }

  constructor(private utilisateurservice:UtilisateurService){

  }
 

/* productEtat(product:any){
    this.utilisateurservice.chec(product).subscribe(
        {
          next:updatedproduct=>{product.checked=!product.checked;}
        });
     // product.checked=!(product.checked);
    } /*
    searchProduct(){
      this.utilisateurservice.searchProduct(this.keyword).subscribe({
        next:value=>{
          this.products=value;
        },
        error:err=>console.log(err)
      })
    }*/
  
}
