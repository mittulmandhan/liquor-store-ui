import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  addProduct = (product) => {
    const items: any[] = this.getShoppingCartItems();
    if (items) {
      items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(items));
    } else {
      localStorage.setItem('shopping_cart', JSON.stringify([product]));
    }
  }

  constructor() { }

  addToCart(product: Product): Observable<void> {
    console.log('added', product);
    return of();
  }

  getShoppingCartItems = () => {
    const items: string = localStorage.getItem('shopping_cart');
    return JSON.parse(items);
  }

  getShoppingCartLength = () => {
    const products = this.getShoppingCartItems();
    return products ? this.getShoppingCartItems().length : 0;
  }

  getTotal = () => {
    const products = this.getShoppingCartItems();
    return products?.reduce((acc, prod) => acc + prod.price, 0);
  }

  removeItem = (p) => {
    const products = this.getShoppingCartItems();
    const index = products.findIndex(item => item.id === p.id);
    if (index >= 0) {
      console.log('calling remover');
      products.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(products));
    }
    return products;
  }

}
