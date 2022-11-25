import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Social } from '../models/social.model';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  socialURL = environment.url +  "/social";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Social[]> {
    return this.httpClient.get<Social[]>(this.socialURL + '/list');
  }

  public detail(id: number): Observable<Social> {
    return this.httpClient.get<Social>(this.socialURL + `/detail/${id}`);
  }

  public save(social: Social): Observable<any> {
    return this.httpClient.post<any>(this.socialURL + '/create', social);
  }

  public update(id: number, social: Social): Observable<any> {
    return this.httpClient.put<any>(this.socialURL + `/update/${id}`, social);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.socialURL + `/delete/${id}`);
  }
  
}
