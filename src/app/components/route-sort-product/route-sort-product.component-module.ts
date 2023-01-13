import { NgModule } from '@angular/core';
import { RouteSortProductComponent } from './route-sort-product.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    RouterLink,
    MatChipsModule
  ],
  declarations: [RouteSortProductComponent],
  providers: [],
  exports: [RouteSortProductComponent]
})
export class RouteSortProductComponentModule {
}
