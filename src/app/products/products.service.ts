import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class ProductService {
  constructor(private http: HttpClient){}

  public getAllProducts(product: any): Observable<any> {
    return this.http.get("http://max-games-api.test/api/products", product);
  }

}


