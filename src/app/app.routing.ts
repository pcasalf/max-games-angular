import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component";

const appRoutes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "products", component: ProductsComponent, pathMatch: "full" },
  { path: "orders", component: OrdersComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);
