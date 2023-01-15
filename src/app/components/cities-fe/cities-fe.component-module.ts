import { NgModule } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CitiesFeComponent } from './cities-fe.component';

@NgModule({
  imports: [MatCardModule, NgIf, MatListModule, CommonModule],
  declarations: [CitiesFeComponent],
  providers: [],
  exports: [CitiesFeComponent]
})
export class CitiesFeComponentModule {
}
