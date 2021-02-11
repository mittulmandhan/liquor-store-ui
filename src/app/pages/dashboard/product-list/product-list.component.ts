import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private route: ActivatedRoute, private cartService: ShoppingCartService) {
    this.products = this.route.snapshot.data['productList'];
    // console.log(this.products);
  }

  ngOnInit(): void {
  }

  addToCart(product) {
    this.cartService.addToCart(product).subscribe(() => {
      console.log('added to cart');
    });
  }

}
