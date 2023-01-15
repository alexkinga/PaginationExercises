import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomBeersComponent } from './custom-beers.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatCardModule, MatButtonToggleModule, ReactiveFormsModule, MatRadioModule, AsyncPipe, MatFormFieldModule, NgIf, NgForOf, MatListModule],
  declarations: [CustomBeersComponent],
  providers: [],
  exports: [CustomBeersComponent]
})
export class CustomBeersComponentModule {
}
