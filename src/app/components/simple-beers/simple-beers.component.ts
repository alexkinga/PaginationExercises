import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {map, Observable, switchMap, combineLatest, take, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {BeersModel} from "../../models/beers.model";
import {BeersService} from "../../services/beers.service";

@Component({
  selector: 'app-simple-beers',
  styleUrls: ['./simple-beers.component.scss'],
  templateUrl: './simple-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleBeersComponent {

  readonly queryParams$: Observable<number> = this._activatedRoute.queryParams.pipe(
    map((params) => params['pageNumber'] ? Math.max(1, +params['pageNumber']) : 1)
  )
  readonly beersList$: Observable<BeersModel[]> = this.queryParams$.pipe(
    switchMap((data) => this._beersService.getAll(data, 10))
  )

  readonly paginationState$: Observable<{
    isFirst: boolean
    isLast: boolean
  }> = combineLatest([
    this.queryParams$,
    this.beersList$
  ]).pipe(
    map(([currentPage, beers]) => ({
        isFirst: currentPage === 1,
        isLast: beers.length < 10
      })
    )
  )

  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router: Router) {
  }

  onNextClick() {
    this.queryParams$.pipe(
      take(1),
      tap((currentPage) =>
        this._router.navigate([], {
          queryParams: {
            pageNumber: currentPage + 1
          }
        })
      )
    ).subscribe()
  }

  onPrevClick() {
    this.queryParams$.pipe(
      take(1),
      tap((currentPage) =>
        this._router.navigate([], {
          queryParams: {
            pageNumber: currentPage - 1
          }
        })
      )
    ).subscribe()
  }


}
