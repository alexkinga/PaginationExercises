import { NgModule } from '@angular/core';
import { FilterMultiCarsComponent } from './components/filter-multi-cars/filter-multi-cars.component';
import { FilterSingleProductComponent } from './components/filter-single-product/filter-single-product.component';
import { RouteSortProductComponent } from './components/route-sort-product/route-sort-product.component';
import { SearchRouteMultiJobsComponent } from './components/search-route-multi-jobs/search-route-multi-jobs.component';
import { SingleProductLimitComponent } from './components/single-product-limit/single-product-limit.component';
import { PaginationPaginatorBeersComponent } from './components/pagination-paginator-beers/pagination-paginator-beers.component';
import { SimpleBeersComponent } from './components/simple-beers/simple-beers.component';
import { CitiesFeComponent } from './components/cities-fe/cities-fe.component';
import { CustomBeersComponent } from './components/custom-beers/custom-beers.component';
import { FilterMultiCarsComponentModule } from './components/filter-multi-cars/filter-multi-cars.component-module';
import { CarServiceModule } from './services/car.service-module';
import { FilterSingleProductComponentModule } from './components/filter-single-product/filter-single-product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { RouteSortProductComponentModule } from './components/route-sort-product/route-sort-product.component-module';
import { SearchRouteMultiJobsComponentModule } from './components/search-route-multi-jobs/search-route-multi-jobs.component-module';
import { JobPostServiceModule } from './models/job-post.service-module';
import { SingleProductLimitComponentModule } from './components/single-product-limit/single-product-limit.component-module';
import { PaginationPaginatorBeersComponentModule } from './components/pagination-paginator-beers/pagination-paginator-beers.component-module';
import { BeersServiceModule } from './services/beers.service-module';
import { SimpleBeersComponentModule } from './components/simple-beers/simple-beers.component-module';
import { CitiesFeComponentModule } from './components/cities-fe/cities-fe.component-module';
import { CitiesServiceModule } from './services/cities.service-module';
import { CustomBeersComponentModule } from './components/custom-beers/custom-beers.component-module';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'filter-multi-cars', component: FilterMultiCarsComponent }, { path: 'filter-single-product', component: FilterSingleProductComponent }, { path: 'products/:category', component: FilterSingleProductComponent }, { path: 'products-sort', component: RouteSortProductComponent }, { path: 'multi-jobs', component: SearchRouteMultiJobsComponent }, { path: 'products-limit', component: SingleProductLimitComponent }, { path: 'pagination-beers', component: PaginationPaginatorBeersComponent }, { path: 'simple-beers', component: SimpleBeersComponent }, { path: 'cities', component: CitiesFeComponent }, { path: 'custom-beers', component: CustomBeersComponent }]), FilterMultiCarsComponentModule, CarServiceModule, FilterSingleProductComponentModule, ProductServiceModule, RouteSortProductComponentModule, SearchRouteMultiJobsComponentModule, JobPostServiceModule, SingleProductLimitComponentModule, PaginationPaginatorBeersComponentModule, BeersServiceModule, SimpleBeersComponentModule, CitiesFeComponentModule, CitiesServiceModule, CustomBeersComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
