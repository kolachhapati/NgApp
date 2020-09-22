import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProductModel } from 'app/product/product.model';
import { Observable } from 'rxjs';
import { IOrderModel } from 'app/order/order.model';

const serverUrl:string = 'https://localhost:44396/'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  saveOrder(orderData: IOrderModel) {
    return this.http.post(serverUrl + 'api/Order/Create' , orderData);
  }
  
  
  constructor(private http: HttpClient) {
    
   }

  registerProduct(productData: IProductModel) {
     return this.http.post(serverUrl + 'api/Product/Create' , productData);
  }

  getProducts() :Observable<any> {
     return this.http.get<IProductModel[]>(serverUrl +'api/Product/Get');
  }

  // getLocation(id: any): Observable<LocationModel> {
  //   let parameter = new HttpParams().set("id", id.toString());
  //   return this.http.get<LocationModel>(this.serverUrl + '/Service/Loc', { headers: this.auth.gettoken(), params: parameter });
  // }
  // deleteLocation(LocationId: any) {
  //   let parameter = new HttpParams().set("id", LocationId.toString());
  //   return this.http.get(this.serverUrl + '/Service/LocDel', { headers: this.auth.gettoken(), params: parameter });
  // }
}
