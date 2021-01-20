import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { IProductModel } from 'app/product/product.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  categories;
  productcat: any = [];
  selectedproductcat;
  constructor(private apiService: ApiService, private toastr: ToastrService) {
    this.initializeForm();
  }

  product: IProductModel

  ngOnInit(): void {
    this.getproductCategory();
  }

  initializeForm() {
    this.product = {
      Name: null,
      Description: null,
      ProductId: null,
      Category: null,
      Price: 0.00,
      ProductCategoryId: 0
    }
  }

  getproductCategory() {
    this.apiService.getProductCategory().subscribe(data => {
      this.productcat = data;
    })
  }

  saveProduct(form: NgForm) {
    this.product.ProductCategoryId = this.selectedproductcat;
    return this.apiService.registerProduct(this.product).subscribe(data => {
      if (data > 0) {
        debugger;
        this.toastr.success("Product Added", "Success");
      }
    });
  }

}
