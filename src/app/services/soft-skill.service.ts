import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  softskillURL = "http://localhost:8080/softskill"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.softskillURL + '/list')
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.softskillURL + `/detail/${id}`)
  }

  public save(softskill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.softskillURL + '/create', softskill)
  }

  public update(id: number, softskill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.softskillURL + `/update/${id}`, softskill)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.softskillURL + `/delete/${id}`)
  }
  
}
