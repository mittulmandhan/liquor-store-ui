import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  goToSignIn() {
    this.router.navigate(['/login']);
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }

  goToDashboard() {
    this.router.navigate(['/']);
  }

}
