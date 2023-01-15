import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SimpleBeersComponent } from './simple-beers.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [SimpleBeersComponent],
  providers: [],
  exports: [SimpleBeersComponent]
})
export class SimpleBeersComponentModule {
}
