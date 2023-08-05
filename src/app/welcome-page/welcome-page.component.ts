import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit{
  isLogin:boolean = false;
  username:string = "";
  today:string = "";

  constructor(private tokenStorageService:TokenStorageService, private router:Router) {
  }

  ngOnInit(): void {
    this.isLogin = this.tokenStorageService.isLoggedIn()
    if (!this.isLogin){
      this.router.navigate(['/login']);
    }
    this.username = this.tokenStorageService.getUsername();
    let date = new Date();
    this.today = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

}
