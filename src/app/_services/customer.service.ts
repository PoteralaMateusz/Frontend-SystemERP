import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Customer} from "../model/customer";

const CUSTOMER_API = "/url/customers";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${CUSTOMER_API}`, httpOptions);
  }

  getCustomerById(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${CUSTOMER_API}/${id}`,httpOptions);
  }

  addCustomer(name: string, street: string, houseNumber: number, city: string, zipcode: number, country: string): Observable<any> {
    return this.http.post(`${CUSTOMER_API}`, {
      name: name,
      country: country,
      city: city,
      street: street,
      houseNumber: houseNumber,
      zipCode: zipcode
    }, httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  updateCustomer(id: number, name: string, street: string, houseNumber: number, city: string, zipcode: number, country: string): Observable<any> {
    return this.http.patch(`${CUSTOMER_API}/${id}`, {
      name: name,
      country: country,
      city: city,
      street: street,
      houseNumber: houseNumber,
      zipCode: zipcode
    }, httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  deleteCustomer(id: number):Observable<any>{
    return this.http.delete(`${CUSTOMER_API}/${id}`,httpOptions)
      .pipe(
      tap(response => {
        console.log(response);
      })
      );
  }
}
