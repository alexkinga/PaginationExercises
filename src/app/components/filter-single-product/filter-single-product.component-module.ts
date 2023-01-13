import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FilterSingleProductComponent } from './filter-single-product.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterLink],
  declarations: [FilterSingleProductComponent],
  providers: [],
  exports: [FilterSingleProductComponent]
})
export class FilterSingleProductComponentModule {
}
