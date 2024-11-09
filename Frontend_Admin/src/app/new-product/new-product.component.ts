import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';
import { Terrain } from '../model/Terrain.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
 public productForm!:FormGroup;
  
constructor(private fb:FormBuilder,private productService:ProductService){

}
ngOnInit() {
  this.productForm=this.fb.group({
   
    nom:this.fb.control("",Validators.required),
    description:this.fb.control("",Validators.required),
    adresse:this.fb.control("",Validators.required),
    image:this.fb.control("",Validators.required)
  });
}
saveTerrain(){
let terrain:Terrain=this.productForm.value;
console.log(JSON.stringify(terrain));

this.productService.saveTerrain(terrain).subscribe({
  next:value=>{
    alert(JSON.stringify(value))
  },
error:err=>{
  console.log(err);
}
});
}
}
