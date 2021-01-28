import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IProductCategoryModel, IProductModel } from 'app/product/product.model';
import { Observable } from 'rxjs';
import { IOrderModel, ISalesModel } from 'app/order/order.model';

import { environment } from 'environments/environment.prod';


//const serverUrl: string = 'https://localhost:44396/'
const serverUrl: string = 'http://localhost:44336/'



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  


  constructor(private http: HttpClient) { }
  saveOrder(orderData: IOrderModel) {
    return this.http.post(serverUrl + 'api/Order/Create', orderData);
  }

  registerProduct(productData: IProductModel) {
    return this.http.post(serverUrl + 'api/Product/Create', productData);
  }

  registerCategory(productCat: IProductCategoryModel) {
    return this.http.post(serverUrl + 'api/Product/CreateProdCat', productCat);
  }

  completeOrder(salesData: ISalesModel) {
    return this.http.post(serverUrl + 'api/Order/Complete', salesData);
  }

  getProducts(): Observable<any> {
    return this.http.get<IProductModel[]>(serverUrl + 'api/Product/Get');
  }

  delProduct(productId: any) {
    let parameter = new HttpParams().set("id", productId.toString());
    return this.http.delete(serverUrl + 'api/Product/DelProduct', {params : parameter});
  }

  getproductsbyId(id: number) {
    let parameter = new HttpParams().set("id", id.toString());
    return this.http.get<IProductModel[]>(serverUrl + 'api/Product/GetById',{ params : parameter });
  }

  getProductCategory(): Observable<any> {
    return this.http.get<IProductCategoryModel[]>(serverUrl + 'api/Product/GetCat');
  }

  delProdCat(productCategoryId: any) {
    let parameter = new HttpParams().set("id", productCategoryId.toString());
    return this.http.delete(serverUrl + 'api/Product/DelProdCat',{params: parameter});
  }

  getOrders():Observable<any> {
    return this.http.get<ISalesModel[]>(serverUrl + 'api/Order/GetOrderList');
  }

  



  // getLocation(id: any): Observable<LocationModel> {
  //   let parameter = new HttpParams().set("id", id.toString());
  //   return this.http.get<LocationModel>(this.this.serverUrl + '/Service/Loc', { headers: this.auth.gettoken(), params: parameter });
  // }
  // deleteLocation(LocationId: any) {
  //   let parameter = new HttpParams().set("id", LocationId.toString());
  //   return this.http.get(this.this.serverUrl + '/Service/LocDel', { headers: this.auth.gettoken(), params: parameter });
  // }

}
