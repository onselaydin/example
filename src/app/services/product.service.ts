import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable(
  //{providedIn: 'root'}
  )
export class ProductService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/products";

  //not: observable bu servisi çağırdığımız yerde subscribe olabilir.
  getProducts(categoryId):Observable<Product[]>{
    console.log(categoryId);
    let newPath = this.path;
    if(newPath){
      newPath += "?categoryId="+categoryId
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product:Product):Observable<Product>{
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization':'Blank'
        })
      }
      return this.http.post<Product>(this.path,product,httpOptions).pipe(
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
