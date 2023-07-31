import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthServiceService} from "../_services/auth-service.service";
import {TokenStorageService} from "../_services/token-storage.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthServiceService, private storageService: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUserData(username,data.access_token);
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error: err => {
        this.isLoginFailed = true;
        if (err.status == 403){
          this.errorMessage = 'Password is incorrect !';
        }
        else {
          this.errorMessage = err.error;
        }

      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  logout() {
    this.authService.logout();
    this.storageService.clear();
    this.reloadPage();
  }

}
