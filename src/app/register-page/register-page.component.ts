import {Component} from '@angular/core';
import {AuthServiceService} from "../_services/auth-service.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  form: any = {
    username: null,
    password: null,
    firstname: null,
    lastname: null
  };
  isSignIn: boolean = false;
  errorMessage: string = '';
  isRegisterFailed: boolean = false;

  constructor(private authServiceService: AuthServiceService) {
  }

  onSubmit() {
    const {username, password, lastname, firstname} = this.form;
    this.authServiceService.register(firstname, lastname, username, password).subscribe({
      next: data => {
        this.isRegisterFailed = false;
        this.isSignIn = true;
      },
      error: err => {
        this.isRegisterFailed = true;
        this.errorMessage = err.error;
        this.form.username = '';
      }
    })
  }
}
