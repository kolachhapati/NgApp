import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/api.service';
import { IOrderModel } from '../order.model';
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
  orders: IOrderModel;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  orderGroupId: any = null;
  grandTotal;
  Qty: number;
  selectedProduct: number;
  showOrders: boolean = false;
  isEditable = true;
  headerlist: string[] = ["Product", "Quantity", "Price", "Amount"]


  constructor(private _formBuilder: FormBuilder, private apiService: ApiService) {
    this.orders = {
      ProductId: null,
      OrderGroup: null,
      Quantity: null,
      OrderId: null
    }
  }

  ngOnInit() {


    this.firstFormGroup = this._formBuilder.group({
      selectedProduct: ['', Validators.required],
      Qty: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getproducts();
  }
 
  getproducts() {
    this.apiService.getProducts().subscribe(data => {
      this.products = data['products'];
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



}
