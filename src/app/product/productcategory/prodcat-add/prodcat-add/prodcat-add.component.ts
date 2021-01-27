import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProductCategoryModel } from 'app/product/product.model';
import { ApiService } from 'app/shared/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'prodcat-add',
  templateUrl: './prodcat-add.component.html',
  styleUrls: ['./prodcat-add.component.css']
})
export class ProdcatAddComponent implements OnInit {
  booleanCondition :boolean =  false;
  productCat: IProductCategoryModel;
  constructor(private apiService: ApiService, private toastr: ToastrService) { this.initializeForm() }

  ngOnInit(): void {
  }

  saveCategory(form: NgForm) {
    this.booleanCondition = !this.booleanCondition;
    return this.apiService.registerCategory(this.productCat).subscribe((res: any) => {
      if (res > 0){
        this.toastr.success("Category is Saved", "Success");
        this.booleanCondition = !this.booleanCondition;
        this.initializeForm();
      }
    },
      (err: any) => console.log(err))
  };

  initializeForm() {
    this.productCat = {
      Name: null,
      ProductCategoryId: null
    }
  }

}
