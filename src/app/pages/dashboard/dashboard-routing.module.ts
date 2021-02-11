import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardResolverService } from 'src/app/resolvers/dashboard-resolver.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        resolve: { productList: DashboardResolverService}
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
