import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class FrontSkillService {

  frontskillURL = "http://localhost:8080/frontskill"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.frontskillURL + '/list')
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.frontskillURL + `/detail/${id}`)
  }

  public save(frontskill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.frontskillURL + '/create', frontskill)
  }

  public update(id: number, frontskill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.frontskillURL + `/update/${id}`, frontskill)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.frontskillURL + `/delete/${id}`)
  }
  
}
