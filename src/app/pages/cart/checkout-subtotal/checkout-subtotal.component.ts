import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.css']
})
export class CheckoutSubtotalComponent implements OnInit {

  constructor(public cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
