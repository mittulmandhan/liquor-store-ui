import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Injectable()
export class DashboardResolverService implements Resolve<Product[]> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.productService.getAllProducts();
  }

}
