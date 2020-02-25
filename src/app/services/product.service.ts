import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable(
  //{providedIn: 'root'}
  )
export class ProductService {

  constructor(private http:HttpClient) { }

  //not: observable bu servisi çağırdığımız yerde subscribe olabilir.
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products").pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  //Loglama hata yakalama...
  handleError(handleError: HttpErrorResponse) {
    let errorMessage ='';
    if(handleError.error instanceof ErrorEvent){
      errorMessage = 'Bir hata oluştu '+ handleError.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata';
    }
    return throwError(errorMessage);
  }

}
