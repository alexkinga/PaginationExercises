import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PaginationPaginatorBeersComponent } from './pagination-paginator-beers.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [MatCardModule, CommonModule, MatPaginatorModule, MatChipsModule],
  declarations: [PaginationPaginatorBeersComponent],
  providers: [],
  exports: [PaginationPaginatorBeersComponent]
})
export class PaginationPaginatorBeersComponentModule {
}
