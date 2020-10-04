import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProductCategoryModel } from 'app/product/product.model';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'app-prodcat',
  templateUrl: './prodcat.component.html',
  styleUrls: ['./prodcat.component.css']
})
export class ProdcatComponent implements OnInit {

  
productCat: IProductCategoryModel;
  constructor(private apiService:ApiService) { this.initializeForm() }

  ngOnInit(): void {
  }
  
  saveCategory(form:NgForm){
    return this.apiService.registerCategory(this.productCat).subscribe((res:any) => console.log(res));
  }

  initializeForm() {
    this.productCat = {
      Name : null,
      ProductCategoryId :null
    }
  }
}
