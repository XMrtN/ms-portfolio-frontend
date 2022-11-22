import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  url = "http://localhost:8080/proyect"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Proyect[]> {
    return this.httpClient.get<Proyect[]>(this.url + '/list')
  }

  public detail(id: number): Observable<Proyect> {
    return this.httpClient.get<Proyect>(this.url + `/detail/${id}`)
  }

  public save(proyect: Proyect): Observable<any> {
    return this.httpClient.post<any>(this.url + '/create', proyect)
  }

  public update(id: number, proyect: Proyect): Observable<any> {
    return this.httpClient.put<any>(this.url + `/update/${id}`, proyect)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `/delete/${id}`)
  }

}
