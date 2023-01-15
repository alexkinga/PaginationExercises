import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {map, Observable, of, shareReplay, combineLatest, take, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CitiesModel} from "../../models/cities.model";
import {CitiesService} from "../../services/cities.service";
import {MatSelectionListChange} from "@angular/material/list";

@Component({
  selector: 'app-cities-fe',
  styleUrls: ['./cities-fe.component.scss'],
  templateUrl: './cities-fe.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesFeComponent {

  readonly pageSizes$: Observable<number[]> = of([5, 10, 15])
  readonly allCities$: Observable<CitiesModel[]> = this._citiesService.getAllCities();

  readonly queryParams$: Observable<{
    pageSize: number
    pageNumber: number
  }> = this._activatedRoute.queryParams.pipe(
    map((params) => ({
      pageSize: params['pageSize'] ? Math.max(5, +params['pageSize']) : 5,
      pageNumber: params['pageNumber'] ? Math.max(1, +params['pageNumber']) : 1
    })), shareReplay(1)
  )
  readonly pageNumbers$: Observable<number[]> = combineLatest([
    this.allCities$,
    this.queryParams$
  ]).pipe(
    map(([cities, params]) => {
      // Array.from pozwala nam zapakować indexy do Array'a
      return Array.from(
        //.keys() zwraca indexy
        Array(Math.ceil(cities.length / params.pageSize)).keys()
        //indexy są liczone 0,1,2,3 itd dzięki mapowaniu liczone od 1
      ).map((n) => n + 1);
    })
  )
  readonly cities$: Observable<CitiesModel[]> = combineLatest([
    this.allCities$,
    this.queryParams$
  ]).pipe(
    map(([cities, params]) =>
      cities.slice(
        (params.pageNumber - 1) * params.pageSize,
        params.pageSize * params.pageNumber
      )
    )
  )


  constructor(private _activatedRoute: ActivatedRoute, private _citiesService: CitiesService, private _router: Router) {
  }

  choosePageNumber(event: MatSelectionListChange) : void{
    this.queryParams$.pipe(
      take(1),
      tap((params) =>
        this._router.navigate([], {
          queryParams: {
            pageNumber: event.options[0].value,
            pageSize: params['pageSize']
          }
        }))
    ).subscribe()
  }

  choosePageSize(event: MatSelectionListChange) : void{
    combineLatest(
      [this.queryParams$.pipe(take(1)), this.allCities$]).pipe(
      tap(([params, cities]) =>
        this._router.navigate([], {
          queryParams: {
            pageNumber: Math.min(
              Math.ceil(cities.length / event.options[0].value),
              params['pageNumber']
            ),
            pageSize: event.options[0].value
          }
        })
      )
    ).subscribe()
  }
}
