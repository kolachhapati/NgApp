import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  ISalesModel } from 'app/order/order.model';
import { ApiService } from 'app/shared/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders:ISalesModel[]
  dataSource;
  searchKey: string;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ["Name", "Total", "PhoneNumber","Actions"]
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getOrders().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   });
  }

  onDelete(e){
    // this.apiService.delProduct(e.productId).subscribe((res:any) => console.log(res));
  }

  onEdit(e){
    console.log(e.orderId);
  }

  searchProd() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

}
