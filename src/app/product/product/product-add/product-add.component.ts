import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { IProductModel } from 'app/product/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private apiService:ApiService) { 
    this.initializeForm();
  }

  product:IProductModel

  ngOnInit(): void {

  }

  initializeForm() {
    this.product = {
      Name : null,
      Description :null,
      ProductId :null,
      Price : 0.00
    }
  }
  
  saveProduct(form:NgForm){
   return this.apiService.registerProduct(this.product).subscribe((res:any) => console.log(res));
  }
 
}
