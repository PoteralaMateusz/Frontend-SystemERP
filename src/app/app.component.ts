import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./_services/token-storage.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frontend-SystemERP';

  constructor(private tokenStorageService:TokenStorageService, private router:Router) {
  }
  ngOnInit(): void {
    if (!this.tokenStorageService.isLoggedIn()){
      this.router.navigate(["./login"])
    }
  }
}
