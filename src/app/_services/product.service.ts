import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Product} from "../model/product";

const PRODUCT_API = "/url/products";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProductById(productId:number):Observable<Product>{
    return this.http.get<Product>(`${PRODUCT_API}/${productId}`,httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }
  addProductToOrder(orderId: number, drawingName: string, pieces: number): Observable<any> {
    return this.http.post(`${PRODUCT_API}`, {
      drawingName: drawingName,
      pieces: pieces,
      orderId: orderId,
      items: []
    }, httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }
}
