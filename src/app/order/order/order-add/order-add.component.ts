import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/api.service';
import { IOrderModel } from 'app/order/order.model';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  constructor(private apiService:ApiService,private _formBuilder: FormBuilder) { 
  }
  firstFormGroup: FormGroup;
  ngOnInit(): void {
    
  }



}
