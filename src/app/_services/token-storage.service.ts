import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  public clear(): void {
    window.sessionStorage.clear();
  }
  public saveUserData(username: string, token: string):void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, 'Bearer ' + token);

  }
  public getToken():string{
    const key = window.sessionStorage.getItem(USER_KEY);
    if (key){
      return key;
    }
    return '';
  }


  public isLoggedIn():boolean{
    const key = window.sessionStorage.getItem(USER_KEY);
    if (key){
      return true;
    }
    return false;
  }

}
