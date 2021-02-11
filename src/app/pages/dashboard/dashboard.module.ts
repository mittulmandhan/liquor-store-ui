import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BannerComponent } from './banner/banner.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card'
import { DashboardResolverService } from 'src/app/resolvers/dashboard-resolver.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DashboardComponent, BannerComponent, ProductListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    DashboardResolverService
  ]
})
export class DashboardModule { }
