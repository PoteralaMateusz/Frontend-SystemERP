import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {TokenStorageService} from "./token-storage.service";

const AUTH_API = "/url/api/auth/";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiServerUrl = "http://localhost:8080/";
  constructor(private http: HttpClient, private tokenStorageService:TokenStorageService) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email: username,
      password: password
    }, httpOptions)
  }

  register(firstname: string, lastname: string, username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      firstname:firstname,
      lastname:lastname,
      email: username,
      password: password,
    }, httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', {}, httpOptions);
  }

  getOrderStats(orderNumber:number): Observable<any>{
    return this.http.get<any>(`/url/orders/stats/${orderNumber}`,httpOptions);
  }
}
