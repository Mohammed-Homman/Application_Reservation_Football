import { Component } from '@angular/core';
import { ConnectService } from '../connect.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-connect-component',
  templateUrl: './connect-component.component.html',
  styleUrls: ['./connect-component.component.css']
})
export class ConnectComponentComponent {
  public userForm!:FormGroup;
  users:Array<User>=[];
  constructor(private fb:FormBuilder,private connectService:ConnectService){
  
  }
  ngOnInit() {
    this.userForm=this.fb.group({
      email:this.fb.control("",Validators.required),
      password:this.fb.control("",Validators.required),
      
     
    });

  /*  this.connectService.getUsers().subscribe({
      next:value=> {
        this.users = value;
        console.log(this.users);
        
      },
      error:err =>{
        console.log(err);
        
      }
    })*/
  }
  
 /* saveProduct(){
  let product:Product=this.productForm.value;
  this.productService.saveProduct(product).subscribe({
    next:value=>{
      alert(JSON.stringify(value))
    },
  error:err=>{
    console.log(err);
  }
  });
  }*/

  login() {
    if (!this.userForm) {
      console.error("Le formulaire n'est pas initialisé.");
      return;
    }
  
    if (this.userForm.invalid) {
      // Le formulaire est invalide, arrêtez le processus de connexion
      return;
    }
  
    const email = this.userForm.get('email')?.value;
    const password = this.userForm.get('password')?.value;
  
    if (!email || !password) {
      console.error("Les champs email et mot de passe sont requis.");
      return;
    }
  this.connectService.verifierUser(email,password).subscribe({
    next:response=>{
      if (response!=null) {
        console.log(response);
        
      }
      else{
        console.log(response);
      }
      
    },
    error:err =>{
        console.log(err);
        
    },
  })
 
}
}
