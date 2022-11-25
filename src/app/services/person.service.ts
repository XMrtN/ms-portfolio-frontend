import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = environment.url + "/person";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url + '/list');
  }

  public detail(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.url + `/detail/${id}`);
  }

  // public save(person: Person): Observable<any> {
  //   return this.httpClient.post<any>(this.url + '/create', person);
  // }

  public update(id: number, person: Person): Observable<any> {
    return this.httpClient.put<any>(this.url + `/update/${id}`, person);
  }

  // public delete(id: number): Observable<any> {
  //   return this.httpClient.delete<any>(this.url + `/delete/${id}`);
  // }

}
