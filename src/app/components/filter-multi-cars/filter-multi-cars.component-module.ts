import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, NgForOf, NgIf} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { FilterMultiCarsComponent } from './filter-multi-cars.component';
import {MatCommonModule} from "@angular/material/core";


@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    NgIf,
    MatTableModule,
    MatCommonModule,
    CommonModule
  ],
  declarations: [FilterMultiCarsComponent],
  providers: [],
  exports: [FilterMultiCarsComponent]
})
export class FilterMultiCarsComponentModule {
}
