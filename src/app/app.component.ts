import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./_services/token-storage.service";
import {Router} from "@angular/router";
import {AuthServiceService} from "./_services/auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend-SystemERP';
  isLogged = false;
  username: any;

  constructor(private tokenStorageService: TokenStorageService, private authServiceService: AuthServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLogged = this.tokenStorageService.isLoggedIn();
    this.username = this.tokenStorageService.getUsername();
    if (!this.isLogged){
      this.router.navigate(['/login'])
    }else {
      this.router.navigate(['/welcome'])
    }
  }

  logout() {
    this.tokenStorageService.clear();
    this.authServiceService.logout();
    window.location.reload();
  }
}
