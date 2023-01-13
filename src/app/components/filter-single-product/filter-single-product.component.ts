import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, switchMap} from 'rxjs';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-filter-single-product',
  styleUrls: ['./filter-single-product.component.scss'],
  templateUrl: './filter-single-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSingleProductComponent {
  readonly categories$: Observable<string[]> = this._productService.getCategories();

  readonly filteredProducts$: Observable<ProductModel[]> = this._activatedRoute.params.pipe(
    map((params) => params['category']),
    switchMap((data) => this._productService.getOneCategory(data))
  );

  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
