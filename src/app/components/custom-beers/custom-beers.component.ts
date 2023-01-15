import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {map, Observable, of, switchMap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {BeersModel} from "../../models/beers.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BeersService} from "../../services/beers.service";

@Component({
  selector: 'app-custom-beers',
  styleUrls: ['./custom-beers.component.scss'],
  templateUrl: './custom-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomBeersComponent {
  readonly limit$: Observable<number[]> = of([5, 10, 15]);
  readonly pageOptions$: Observable<number[]> = of([1, 2, 3, 4, 5])
  readonly pageForm: FormGroup = new FormGroup({
    limit: new FormControl(),
    page: new FormControl(),
  });
  readonly queryParams$: Observable<{ pageNumber: number, perPage: number }> = this._activatedRoute.queryParams.pipe(
    map((params) => ({
      pageNumber: params["pageNumber"] ? +params["pageNumber"] : 1,
      perPage: params["perPage"] ? +params["perPage"] : 5,
    }))
  );
  readonly beersList$: Observable<BeersModel[]> = this.queryParams$.pipe(
    switchMap(data =>
      this._beersService.getAll(data.pageNumber, data.perPage)
    )
  );

  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router: Router) {
  }

  onChangeLimit(item: number) {
    const limit = this.pageForm.controls['limit'].value
    this._router.navigate([], {
      queryParams: {
        pageNumber: this.pageForm.controls['page'].value,
        perPage: limit
      }
    })
    console.log(item)
  }

  onChangePage(item: number) {
    const page = this.pageForm.controls['page'].value
    this._router.navigate([], {
      queryParams: {
        pageNumber: page,
        perPage: this.pageForm.controls['limit'].value,
      }
    })
    console.log(item)
  }
}
