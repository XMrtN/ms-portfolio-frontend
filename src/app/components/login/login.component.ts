import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/login-user.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false;
  isLoginFail: boolean = false;
  isShowing: boolean = false;
  loginUser?: LoginUser;
  userName?: string;
  password?: string;
  roles: string[] = [];
  errorMsg?: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onClean(): void {
    this.userName = '';
    this.password = '';
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.userName!, this.password!)
    this.authService.logIn(this.loginUser).subscribe(data => {
      this.isLoggedIn = true;
      this.isLoginFail = false;
      this.tokenService.setToken(data.token!);
      this.tokenService.setUserName(data.userName!);
      this.tokenService.setAuthorities(data.authorities!);
      this.roles = data.authorities!;
    }, err => {
      this.isLoggedIn = false;
      this.isLoginFail = true;
      this.errorMsg = err.error.msg;
      console.log(this.errorMsg);
    });
    this.onClean();
  }

}
