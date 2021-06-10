import { routing } from "./app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductsComponent } from "./products/products.component";



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, ProductsComponent],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
