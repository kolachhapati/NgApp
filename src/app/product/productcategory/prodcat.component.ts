import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodcat',
  templateUrl: './prodcat.component.html',
  styleUrls: ['./prodcat.component.css']
})
export class ProdcatComponent implements OnInit {
  showlist:boolean = false;
  addbutton =  "Add Category";
  showbutton =  "Show Categories";
  btnDisplay: string = this.addbutton;
  

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleProduct(){
    this.showlist = !this.showlist; 
    this.btnDisplay = this.btnDisplay == this.addbutton ? this.showbutton : this.addbutton;
  }

}
