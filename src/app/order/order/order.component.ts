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
  customerName : string;
  pickupDetail: string;
  grandTotal;
  Qty: number;
  showButton: boolean = true;
  selectedProductCategory: number;
  selectedProduct: number;
  invoiceNumber: string;
  showOrders: boolean = false;
  isEditable = true;
  headerlist: string[] = ["Product", "Quantity", "Price", "Amount"]


  constructor(private _formBuilder: FormBuilder, private apiService: ApiService, private toastr: ToastrService) {
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
      custemail: ['', Validators.required],
      pkupDate : ['', Validators.required]
    });
    this.getproductCategory();
  }

  reload() {
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
    this.sales.PickUpDate = this.secondFormGroup.get('pkupDate').value;
    this.sales.PhoneNumber = this.secondFormGroup.controls['phnnumber'].value;
    this.sales.OrderGroup = this.orderGroupId;
    this.sales.Total = this.grandTotal;

    if (this.sales.PhoneNumber == "") {
      this.toastr.warning("Customer Contact Number is required", "Success");
      return;
    }
    if (this.sales.PickUpDate == "") {
      this.toastr.warning("Pick Up Date is required", "Success");
      return;
    }

    return this.apiService.completeOrder(this.sales).subscribe((res: any) => {
      this.customerName = res.CustomerName;
      this.pickupDetail = res.PickUpDetails;
      this.invoiceNumber = res.DocketNumber;
      this.Qty = res.Qty;
      this.showButton = false;
      this.toastr.success("Sales is confirmed", "Success");
    },
    (err:any) =>{
      console.log(err)
     }
    );
  }

  cancelOrder() {
    console.log(this.orderGroupId);
    // this.firstFormGroup.controls['selectedProduct'].setValue(0);
    this.orderGroupId = null;
    this.orderlist = null;
    this.reload();
  }

  printInvoice(): void {
    let printContents, popupWin;

    printContents = document.getElementById('receipt').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
          <html>
            <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            </head>
            <style>

            </style>
        <body onload="window.print();window.close()">${printContents}</body>
          </html>`
    );
    popupWin.document.close();
  }

  invoiceNumPrint(){
    let  popupWin;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
          <html>
            <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            </head>
            <style>

            </style>
        <body onload="window.print();window.close()">${this.pickupDetail + " " + this.Qty + " Item(s)"}<br>${this.invoiceNumber}</body>
          </html>`
    );
    popupWin.document.close();
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
      PhoneNumber: null,
      PickUpDate: null,
      Qty:null
    }
  }

}
