import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ComfortFeatureModel} from "../../models/comfort-feature.model";
import {combineLatest, map, Observable, shareReplay, take, tap} from "rxjs";
import {BrandModel} from "../../models/brand.model";
import {CarModel} from "../../models/car.model";
import {CarService} from "../../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-filter-multi-cars',
  styleUrls: ['./filter-multi-cars.component.scss'],
  templateUrl: './filter-multi-cars.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterMultiCarsComponent {

  readonly brandsList$: Observable<BrandModel[]> = this._carService.getAllBrands()
  readonly comfortFeaturesList$: Observable<ComfortFeatureModel[]> = this._carService.getAllComfortFeatures()

  readonly $filteredList: Observable<{
    brands: Set<string>
    comfortsFeature: Set<string>
  }> = this._activatedRouter.queryParams.pipe(
    map((params) => {
        return {
          brands: new Set<string>(params['brands'] === undefined ? [] : params['brands'].split(',')),
          comfortsFeature: new Set<string>(params['comfort-features'] === undefined ? [] : params['comfort-features'].split(','))
        }
    }),
    shareReplay(1)
  )

  readonly $cars : Observable<CarModel[]> = combineLatest([
    this._carService.getAllCars(),
    this.$filteredList
  ]).pipe(
    map(([cars, list]) => cars.filter((car) =>
        list.brands.size === 0 || list.brands.has(car.brandId))
      .filter((car) =>
      list.comfortsFeature.size === 0 || car.comfortFeatureIds.find((comfortId) => list.comfortsFeature.has(comfortId))
      )
    )
  )

  constructor(private _carService: CarService, private _activatedRouter: ActivatedRoute, private _router : Router) {
  }

  onBrandsSelected(brand: BrandModel, event: boolean) {
    this.$filteredList.pipe(
      take(1),
      tap((data) => {
        const brandParams = data.brands // getting current
        const comfortParams = data.comfortsFeature
        event === true ? brandParams.add(brand.id) : brandParams.delete(brand.id);
        this._router.navigate([],{
          queryParams : {
            'brands' : brandParams.size === 0 ? brandParams.clear() : [...brandParams].sort().join(','),
            'comfort-feature' : comfortParams.size === 0 ? comfortParams.clear() : [...comfortParams].sort().join(',')
          }
        })
      })
    ).subscribe()

  }

  onFeaturesSelected(comfort: ComfortFeatureModel, event: boolean) {
    this.$filteredList.pipe(
    take(1),
    tap((data) => {
      const featureParam = data.comfortsFeature;
      const dataParams = data.brands;
      event ? featureParam.add(comfort.id) : featureParam.delete(comfort.id);
      this._router.navigate([], {
        queryParams: {
          'brands' : dataParams.size === 0 ? dataParams.clear() : [...dataParams].sort().join(','),
          'comfort-features' : featureParam.size === 0 ? featureParam.clear() : [...featureParam].sort().join(',')
        }
      })
    })
  ).subscribe()
  }
}
