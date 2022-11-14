import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailInput: string;
  public passwordInput: string;

  constructor(private auth: AuthorizationService) {
    this.emailInput = ""
    this.passwordInput = ""
  }

  ngOnInit(): void {
  }

  public btnLogIn(): void {
    this.auth.loginSimple(this.emailInput, this.passwordInput)
  }

}
