import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Item} from "../model/item";

const ITEM_API = "/url/items";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  getItemByID(itemId: number): Observable<Item> {
    return this.http.get<Item>(`${ITEM_API}/${itemId}`
      , httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  deleteItem(itemId: number): Observable<any> {
    return this.http.delete(`${ITEM_API}/${itemId}`
      , httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  updateItem(itemId: number, material: string, quality: string, pieces: number, donePieces: number, weight: number): Observable<any> {
    return this.http.patch(`${ITEM_API}/${itemId}`, {
      material: material,
      quality: quality,
      pieces: pieces,
      donePieces: donePieces,
      weight: weight
    }, httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  addProgressItem(itemId:number,donePiecesToAdd:number):Observable<any>{
    return this.http.post(`${ITEM_API}/progress/${itemId}/${donePiecesToAdd}`
      , httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  addItem(productId: number, material: string, quality: string, pieces: number, weight: number): Observable<any> {
    return this.http.post(`${ITEM_API}`, {
      productId: productId,
      material: material,
      quality: quality,
      pieces: pieces,
      weight: weight
    }, httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  addItemToProduct(productId: number, material: string, quality: string, pieces: number, weight: number): Observable<any> {
    return this.http.post(`${ITEM_API}`, {
      productId: productId,
      material: material,
      quality: quality,
      pieces: pieces,
      weight: weight
    }, httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    )
  }
}
