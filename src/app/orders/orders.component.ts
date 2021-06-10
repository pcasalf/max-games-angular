import { Component } from "@angular/core";
import { OrdersService } from "./orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent {
  status: string;
  tax: BigInteger;
  sub_total: BigInteger;
  shipping: BigInteger;
  total: BigInteger;


  constructor(public ordersService: OrdersService) {}

  ngOnInit() {
    this.ordersService.getAllOrders({});
  }
  getAllOrders() {
    const orders = {status: this.status, tax: this.tax, sub_total: this.sub_total, shipping: this.shipping, total: this.total};
    this.ordersService.getAllOrders(orders).subscribe( data => {
      console.log(data);
    });
  }

}


