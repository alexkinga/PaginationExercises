import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarModel} from "../models/car.model";
import {Observable} from "rxjs";
import {BrandModel} from "../models/brand.model";
import {ComfortFeatureModel} from "../models/comfort-feature.model";

@Injectable()
export class CarService {
  constructor(private _httpClient: HttpClient) {
  }


  getAllBrands(): Observable<BrandModel[]> {
    return this._httpClient.get<BrandModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands');
  }

  getAllComfortFeatures(): Observable<ComfortFeatureModel[]> {
    return this._httpClient.get<ComfortFeatureModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features');
  }

  getAllCars(): Observable<CarModel[]> {
    return this._httpClient.get<CarModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cars');
  }
}
