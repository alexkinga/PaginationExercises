import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductModel} from "../models/product.model";
import {BeersModel} from "../models/beers.model";

@Injectable()
export class BeersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(pageNumber: number, perPage: number): Observable<BeersModel[]> {
    return this._httpClient.get<BeersModel[]>(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${perPage}`);
  }
}
