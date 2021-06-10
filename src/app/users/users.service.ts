import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

 public login(user: any): Observable<any> {
    return this.http.post("http://max-games-api.test/api/login", user, {headers: this.headers});
  }

  public register(user: any): Observable<any> {
    return this.http.post("http://max-games-api.test/api/register", user);
  }
}
