import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class LoginService {
  constructor(private http: HttpClient) {}

  login() {

    return this.http.post ("localhost:8888/api/login", this.login)

  }

  }


