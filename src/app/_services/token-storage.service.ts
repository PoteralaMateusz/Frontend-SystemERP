import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const USERNAME = "";
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
    window.sessionStorage.removeItem(USERNAME);
    window.sessionStorage.setItem(USER_KEY, 'Bearer ' + token);
    window.sessionStorage.setItem(USERNAME, username);

  }
  public getToken():string{
    const key = window.sessionStorage.getItem(USER_KEY);
    if (key){
      return key;
    }
    return '';
  }

  public getUsername():string{
    const user = window.sessionStorage.getItem(USERNAME);
    if (user){
      return user;
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
