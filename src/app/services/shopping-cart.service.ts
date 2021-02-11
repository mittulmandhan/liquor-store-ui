import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  addProduct = (product) => {
    localStorage.setItem("shopping_cart", product);
  };

  constructor() { }

  addToCart(product: Product): Observable<void> {
    console.log('added', product);
    return of();
  }
}
