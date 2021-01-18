import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProductCategoryModel, IProductModel } from 'app/product/product.model';
import { Observable } from 'rxjs';
import { IOrderModel, ISalesModel } from 'app/order/order.model';
import { environment } from 'environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  serverUrl: string = 'http://localhost:50715/api';
  constructor(private http: HttpClient) {
    
   }

   saveOrder(orderData: IOrderModel) {
    return this.http.post(this.serverUrl + '/Order/Create' , orderData);
  }

  registerProduct(productData: IProductModel) {
     return this.http.post(this.serverUrl + '/Product/Create' , productData);
  }

  completeOrder(salesData: ISalesModel) {
    return this.http.post(this.serverUrl + '/Order/Complete' , salesData);
  }

  getProducts() :Observable<any> {
     return this.http.get<IProductModel[]>(this.serverUrl+'/Product/Get');
  }

  registerCategory(productCat:IProductCategoryModel) {
    return this.http.post(this.serverUrl + '/Product/CreateProdCat' , productCat);
  }

  getCategories() {
    return this.http.get<IProductCategoryModel[]>(this.serverUrl +'/Product/GetCat');
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
