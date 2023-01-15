import { NgModule } from '@angular/core';
import { SingleProductLimitComponent } from './single-product-limit.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    MatButtonToggleModule,
    ReactiveFormsModule,
    NgForOf,
    MatCardModule,
    AsyncPipe,
    MatMenuModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [SingleProductLimitComponent],
  providers: [],
  exports: [SingleProductLimitComponent]
})
export class SingleProductLimitComponentModule {
}
