import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ProductDetailResponse} from '../models/ProductDetailResponse';

@Injectable({
  providedIn: 'root'
})
export class GetmovieService {

  constructor(private http: HttpClient) { }



// tslint:disable-next-line:typedef
getAllMovies(){
   return  this.http.get(environment.URL.PRODUCTS);
}

  // tslint:disable-next-line:typedef
 async getProduct({id}: { id: any }){
    return this.http.get<ProductDetailResponse>(environment.URL.PRODUCT_DETAIL.replace(':id', id));
  }

}
