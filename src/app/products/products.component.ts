import { Component } from "@angular/core";
import { ProductService } from "../products/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {
  name: string;
  cover: string;
  description: string;
  price: BigInteger;
  featured: boolean;
  online: boolean;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts({});
  }
  getAllProducts() {
    const product = {email: this.name, password: this.cover, description: this.description, price: this.price, featured: this.featured, online: this.online};
    this.productService.getAllProducts(product).subscribe( data => {
      console.log(data);
    });
  }

}


