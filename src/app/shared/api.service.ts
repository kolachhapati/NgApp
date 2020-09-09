import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProductModel } from 'app/product/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  serverUrl :string = 'https://localhost:44312/api'
  constructor(private http: HttpClient) {
    
   }

  registerProduct(productData: IProductModel) {
     return this.http.post('https://localhost:44312/api/Product/Create' , productData);
  }

  getProducts() :Observable<IProductModel[]> {
     return this.http.get<IProductModel[]>('https://localhost:44312/api/Product/Get');
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
