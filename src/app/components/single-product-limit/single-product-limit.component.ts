import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, of, switchMap} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-single-product-limit',
  styleUrls: ['./single-product-limit.component.scss'],
  templateUrl: './single-product-limit.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProductLimitComponent {
  readonly limit: FormControl = new FormControl([])
  readonly limit$: Observable<number[]> = of([5, 10, 15])
  readonly queryParams$: Observable<number> = this._activatedRoute.queryParams.pipe(
    map((params) =>
      params['limit'] ? params['limit'] : 5
    ));
  readonly productsList$: Observable<ProductModel[]> = this.queryParams$.pipe(
    switchMap(data => this._productsService.getLimitedProducts(+data)));

  constructor(private _activatedRoute: ActivatedRoute, private _productsService: ProductService, private _router: Router) {
  }

  onChangeLimit(item: number) {
    this._router.navigate([], {
      queryParams: {
        limit: item
      }
    })
    console.log(item)
  }

  setLimit(item: number) {
    this.limit.setValue(item)
    this._router.navigate([], {
      queryParams: {
        limit: item
      }
    })
  }
}
