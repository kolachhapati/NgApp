import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IProductModel } from 'app/product/product.model';
import { ApiService } from 'app/shared/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products:IProductModel[]
  dataSource;
  searchKey: string;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ["Name", "Price", "Description","Actions"]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(result => {
       this.dataSource = new MatTableDataSource(result['products']);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;

       console.log(this.dataSource);
    });
  }

  searchProd() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}



