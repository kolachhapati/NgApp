import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'prodcat-list',
  templateUrl: './prodcat-list.component.html',
  styleUrls: ['./prodcat-list.component.css']
})
export class ProdcatListComponent implements OnInit {
  dataSource;
  searchKey: string;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ["Name", "Actions"]
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProductCategory().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onDelete(e) {
    console.log(e.productCategoryId);
    this.apiService.delProdCat(e.productCategoryId).subscribe((res:any) => console.log(res));
  }

  onEdit(e){
    console.log(e.productCategoryId);
  }

  searchProd() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
