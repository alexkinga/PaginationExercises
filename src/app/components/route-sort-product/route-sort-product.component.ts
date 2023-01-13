import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, of, switchMap} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-route-sort-product',
  styleUrls: ['./route-sort-product.component.scss'],
  templateUrl: './route-sort-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteSortProductComponent {
  public order$: Observable<string[]> = of(['asc', 'desc']);
  readonly products$: Observable<ProductModel[]> = this._activateRoute.queryParams.pipe(
    map((params) => params['sort']),
    switchMap((data) => this._productService.getSorted(data)))

  constructor(private _productService: ProductService, private _activateRoute: ActivatedRoute) {
  }
}
