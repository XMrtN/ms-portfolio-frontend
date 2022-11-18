import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class BackSkillService {

  backskillURL = "http://localhost:8080/backskill"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.backskillURL + '/list')
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.backskillURL + `/detail/${id}`)
  }

  public save(backskill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.backskillURL + '/create', backskill)
  }

  public update(id: number, backskill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.backskillURL + `/update/${id}`, backskill)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.backskillURL + `/delete/${id}`)
  }
  
}
