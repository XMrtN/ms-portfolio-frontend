import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BackSkill } from '../models/back-skill.model';

@Injectable({
  providedIn: 'root'
})
export class BackSkillService {

  backskillURL = environment.url +  "/backskill"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<BackSkill[]> {
    return this.httpClient.get<BackSkill[]>(this.backskillURL + '/list')
  }

  public detail(id: number): Observable<BackSkill> {
    return this.httpClient.get<BackSkill>(this.backskillURL + `/detail/${id}`)
  }

  public save(backskill: BackSkill): Observable<any> {
    return this.httpClient.post<any>(this.backskillURL + '/create', backskill)
  }

  public update(id: number, backskill: BackSkill): Observable<any> {
    return this.httpClient.put<any>(this.backskillURL + `/update/${id}`, backskill)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.backskillURL + `/delete/${id}`)
  }
  
}
