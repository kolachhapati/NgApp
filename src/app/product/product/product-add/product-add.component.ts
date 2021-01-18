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


  productcat: any = [];
  selectedproductcat;
  constructor(private apiService:ApiService) { 
    this.initializeForm();
  }

  product:IProductModel

  ngOnInit(): void {
    this.getproductCategory();
  }

  initializeForm() {
    this.product = {
      Name : null,
      Description :null,
      ProductId :null,
      Price : 0.00,
      ProductCategoryId : null
    }
  }


  getproductCategory(){
    this.apiService.getProductCategory().subscribe(data => {
      this.productcat = data;
    })
  }
  
  saveProduct(form:NgForm){
   this.product.ProductCategoryId = this.selectedproductcat;
   return this.apiService.registerProduct(this.product).subscribe((res:any) => console.log(res));
  }
 
}
