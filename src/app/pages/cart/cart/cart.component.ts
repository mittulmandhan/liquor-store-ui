import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];

  constructor(public cartService: ShoppingCartService) {
    this.getShoppingCart();
  }

  ngOnInit(): void {
  }

  getShoppingCart(): void {
    this.products = this.cartService.getShoppingCartItems() as Product[];
  }

  deleteEventHandler(p): void {
    console.log('deleteEventHandler() called');
    this.getShoppingCart();
  }

}
