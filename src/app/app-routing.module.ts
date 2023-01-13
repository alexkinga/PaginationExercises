import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterMultiCarsComponent } from './components/filter-multi-cars/filter-multi-cars.component';
import { FilterSingleProductComponent } from './components/filter-single-product/filter-single-product.component';
import { RouteSortProductComponent } from './components/route-sort-product/route-sort-product.component';
import { SearchRouteMultiJobsComponent } from './components/search-route-multi-jobs/search-route-multi-jobs.component';
import { FilterMultiCarsComponentModule } from './components/filter-multi-cars/filter-multi-cars.component-module';
import { CarServiceModule } from './services/car.service-module';
import { FilterSingleProductComponentModule } from './components/filter-single-product/filter-single-product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { RouteSortProductComponentModule } from './components/route-sort-product/route-sort-product.component-module';
import { SearchRouteMultiJobsComponentModule } from './components/search-route-multi-jobs/search-route-multi-jobs.component-module';
import { JobPostServiceModule } from './models/job-post.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'filter-multi-cars', component: FilterMultiCarsComponent }, { path: 'filter-single-product', component: FilterSingleProductComponent }, { path: 'products/:category', component: FilterSingleProductComponent }, { path: 'products-sort', component: RouteSortProductComponent }, { path: 'multi-jobs', component: SearchRouteMultiJobsComponent }]), FilterMultiCarsComponentModule, CarServiceModule, FilterSingleProductComponentModule, ProductServiceModule, RouteSortProductComponentModule, SearchRouteMultiJobsComponentModule, JobPostServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
