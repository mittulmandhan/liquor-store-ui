import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {

  @Input() cartProducts: Product[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(public cartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    // console.log('products', this.cartProducts);
  }

  removeItem(p): void {
    this.cartProducts = this.cartService.removeItem(p);
    this.deleteEvent.emit(p);
  }

}
