import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = "http://localhost:8080/person/"

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<Person> {
    return this.http.get<Person>(this.url+"get/profile")
  }

}
