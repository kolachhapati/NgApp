import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/api.service';
import { IOrderModel, ISalesModel } from '../order.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IProductModel } from 'app/product/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderlist: any;
  products: any = [];
  productCategories: any = [];
  orders: IOrderModel;
  sales: ISalesModel;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  orderGroupId: any = null;
  grandTotal;
  Qty: number;
  showButton: boolean = true;
  selectedProductCategory: number;
  selectedProduct: number;
  showOrders: boolean = false;
  isEditable = true;
  headerlist: string[] = ["Product", "Quantity", "Price", "Amount"]


  constructor(private _formBuilder: FormBuilder, private apiService: ApiService,private toastr: ToastrService) {
    this.initializeEntity();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      selectedProduct: ['', Validators.required],
      selectedProductCategory: ['', Validators.required],
      Qty: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      phnnumber: ['', Validators.required],
      custname: ['', Validators.required],
      custemail: ['', Validators.required]
    });
    this.getproductCategory();
  }

  reload(){
    window.location.reload();
  }

  // getproducts() {
  //   this.apiService.getProducts().subscribe(data => {
  //     this.products = data;
  //   })
  // }

  getproductbyId(e) {
    this.apiService.getproductsbyId(e.value).subscribe(data => this.products = data);
  }

  getproductCategory() {
    this.apiService.getProductCategory().subscribe(data => {
      this.productCategories = data;
    })
  }

  saveOrder() {
    this.showOrders = true;
    this.selectedProduct = this.firstFormGroup.controls['selectedProduct'].value;
    this.Qty = this.firstFormGroup.controls['Qty'].value;

    this.orders.ProductId = this.selectedProduct;
    this.orders.Quantity = this.Qty;
    this.orders.OrderId = 0;
    this.orders.OrderGroup = this.orderGroupId;

    return this.apiService.saveOrder(this.orders).subscribe((res: any) => {
      this.orderlist = res['orderlist'];
      this.grandTotal = res['grandTotal']
      this.orderGroupId = this.orderlist[0]["orderGroup"];
    });
  }


  completeOrder() {
    this.sales.Email = this.secondFormGroup.controls['custemail'].value;
    this.sales.Name = this.secondFormGroup.controls['custname'].value;
    this.sales.PhoneNumber = this.secondFormGroup.controls['phnnumber'].value;
    this.sales.OrderGroup = this.orderGroupId;
    this.sales.Total = this.grandTotal;

    return this.apiService.completeOrder(this.sales).subscribe((res: any) => {
      // this.orderGroupId = null;
      // this.orderlist= null;
      this.showButton = false;
      this.toastr.success("Sales is confirmed","Success");
      // alert("Sales is confirmed");
    });


  }

  cancelOrder() {
    
    console.log(this.orderGroupId);
    // this.firstFormGroup.controls['selectedProduct'].setValue(0);
    this.orderGroupId = null;
    this.orderlist = null;
    this.reload();
  }

  initializeEntity() {
    this.orders = {
      ProductId: null,
      OrderGroup: null,
      Quantity: null,
      OrderId: null
    }

    this.sales = {
      OrderGroup: null,
      Total: null,
      Name: null,
      Email: null,
      PhoneNumber: null
    }
  }

}
