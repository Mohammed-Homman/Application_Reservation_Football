import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  public userRegistreForm!:FormGroup;
  
  constructor(private fb:FormBuilder,private connectService:ConnectService){
  
  }
  ngOnInit() {
    this.userRegistreForm=this.fb.group({
      nom:this.fb.control("",Validators.required),
      email:this.fb.control("",Validators.required),
      password:this.fb.control("",Validators.required),
     
    });
  }
  saveUser(){
    let p=this.userRegistreForm.value;
    this.connectService.saveUser(p).subscribe({
      next:value=> {
       // alert(JSON.stringify(value))
        console.log("valiide");
        
          
      },
      error:err=>{
        console.log(err);
        
      }
    })
  
  }
}
