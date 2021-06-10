import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class OrdersService {
  constructor(private http: HttpClient){}

  getAllOrders(orders: any): Observable<any> {
    return this.http.get("http://max-games-api.test/api/orders", orders);
  }
  getOneOrder(orders: any): Observable<any> {
    return this.http.get("http://max-games-api.test/api/orders/{id}", orders);
  }
  createOrders(orders: any): Observable<any> {
    return this.http.post("http://max-games-api.test/api/orders", orders);
  }

  deleteOrders(): Observable<any>{
    return this.http.delete('http://max-games-api.test/api/orders');
  }

}


