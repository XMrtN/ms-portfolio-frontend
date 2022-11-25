import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../models/jwt-dto.model';
import { LoginUser } from '../models/login-user.model';
import { NewUser } from '../models/new-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.url + "/auth";

  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + "/new", newUser);
  }

  public logIn(loginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + "/login", loginUser);
  }

}
