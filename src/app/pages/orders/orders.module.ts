import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrdersRoutingModule } from './order-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatCardModule
  ]
})
export class OrdersModule { }
