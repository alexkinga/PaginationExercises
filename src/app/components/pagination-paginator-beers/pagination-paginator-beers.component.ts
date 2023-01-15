import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { map } from 'rxjs/operators';
import { BeersModel } from '../../models/beers.model';
import { BeersService } from '../../services/beers.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-pagination-paginator-beers',
  styleUrls: ['./pagination-paginator-beers.component.scss'],
  templateUrl: './pagination-paginator-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationPaginatorBeersComponent {
  readonly queryParams$: Observable<{
    pageNumber: number,
    perPage: number,
    pageOptions: number[],
    length: number
  }> = this._activatedRoute.queryParams.pipe(
    map((params) => ({
      pageNumber: params['pageNumber'] ? Math.max(1, +params['pageNumber']) : 1,
      perPage: params['perPage'] ? Math.max(5, +params['perPage']) : 5,
      pageOptions: [5, 10, 15],
      length: 100
    }))
  )
  readonly beerList$: Observable<BeersModel[]> = this.queryParams$.pipe(
    switchMap(data => this._beersService.getAll(data.pageNumber, data.perPage)))



  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router : Router) {
  }

  onChange(event: { pageIndex: number, pageSize: number }): void {
    this._router.navigate([],{
      queryParams: {
        pageNumber: event.pageIndex + 1,
        perPage: event.pageSize,
      }
    })
    console.log(event)
  }
}
