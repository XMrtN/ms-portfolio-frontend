import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colors } from '../models/colors.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  url = environment.url + "/colors";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Colors[]> {
    return this.httpClient.get<Colors[]>(this.url + '/list');
  }

  public detail(id: number): Observable<Colors> {
    return this.httpClient.get<Colors>(this.url + `/detail/${id}`);
  }

  // public save(colors: Colors): Observable<any> {
  //   return this.httpClient.post<any>(this.url + '/create', colors);
  // }

  public update(id: number, colors: Colors): Observable<any> {
    return this.httpClient.put<any>(this.url + `/update/${id}`, colors);
  }

  // public delete(id: number): Observable<any> {
  //   return this.httpClient.delete<any>(this.url + `/delete/${id}`);
  // }

}
