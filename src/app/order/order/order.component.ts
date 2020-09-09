import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  Qty: string;
  selectedProduct;
  showOrders: boolean = false;
  isEditable = true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      selectedProduct: ['', Validators.required],
      Qty: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  saveOrder() {
    this.showOrders = true;
    this.selectedProduct = this.firstFormGroup.controls['selectedProduct'].value;
    this.Qty = this.firstFormGroup.controls['Qty'].value;
  }


}
