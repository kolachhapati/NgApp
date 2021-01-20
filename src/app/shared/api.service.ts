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

  completeOrder(salesData: ISalesModel) {
    return this.http.post(serverUrl + 'api/Order/Complete', salesData);
  }

  getProducts(): Observable<any> {
    return this.http.get<IProductModel[]>(serverUrl + 'api/Product/Get');
  }

  getproductsbyId(id: number) {
    let parameter = new HttpParams().set("id", id.toString());
    return this.http.get<IProductModel[]>(serverUrl + 'api/Product/GetById',{ params : parameter });
  }

  getProductCategory(): Observable<any> {
    return this.http.get<IProductCategoryModel[]>(serverUrl + 'api/Product/GetCat');
  }

  registerCategory(productCat: IProductCategoryModel) {
    return this.http.post(serverUrl + 'api/Product/CreateProdCat', productCat);
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
