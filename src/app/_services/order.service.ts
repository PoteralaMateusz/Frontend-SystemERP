import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Order} from "../model/order";
import {OrderStats} from "../model/orderStats";

const ORDER_API = "/url/orders";
const PRODUCT_API = "/url/products";
const ITEM_API = "/url/items";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${ORDER_API}`, httpOptions);
  }

  getOrderById(orderId: number):Observable<Order>{
    return this.http.get<Order>(`${ORDER_API}/${orderId}`,httpOptions);
  }

  getOrdersStats():Observable<OrderStats[]>{
    return this.http.get<OrderStats[]>(`${ORDER_API}/stats`,httpOptions).pipe();
  }

  saveOrder(customerId: number,
            orderNumber: string,
            orderDate: Date,
            deadline: Date,
            finishDate: Date,
            price: number): Observable<any> {
    return this.http.post(`${ORDER_API}`, {
      customerId: customerId,
      orderNumber: orderNumber,
      orderDate: orderDate,
      deadline: deadline,
      finishDate: null,
      price: price,
      products: []
    }, httpOptions).pipe(
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

  addItemToProduct(productId: number, material: string, quality: string, pieces: number, weight: number): Observable<any> {
    return this.http.post(`${ITEM_API}`, {
      productId:productId,
      material:material,
      quality:quality,
      pieces:pieces,
      weight:weight
    },httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    )
  }

}
