import { Component, OnInit } from '@angular/core';
import { IProductModel } from '../product.model';
import { ApiService } from 'app/shared/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  showlist:boolean = false;
  addbutton =  "Add Product";
  showbutton =  "Show Products";
  btnDisplay: string = this.addbutton;
  constructor(private apiService:ApiService) { 
   
  }

  ngOnInit(): void {

  }

  toggleProduct(){
    this.showlist = !this.showlist; 
    this.btnDisplay = this.btnDisplay == this.addbutton ? this.showbutton : this.addbutton;
  }

}
