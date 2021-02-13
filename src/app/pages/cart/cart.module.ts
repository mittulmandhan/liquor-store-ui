import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CheckoutSubtotalComponent } from './checkout-subtotal/checkout-subtotal.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [CartComponent, CheckoutSubtotalComponent, CartProductsComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatButtonModule
  ]
})
export class CartModule { }
