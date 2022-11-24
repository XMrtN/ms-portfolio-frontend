import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FrontSkill } from '../models/front-skill.model';

@Injectable({
  providedIn: 'root'
})
export class FrontSkillService {

  frontskillURL = environment.url + "/frontskill"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<FrontSkill[]> {
    return this.httpClient.get<FrontSkill[]>(this.frontskillURL + '/list')
  }

  public detail(id: number): Observable<FrontSkill> {
    return this.httpClient.get<FrontSkill>(this.frontskillURL + `/detail/${id}`)
  }

  public save(frontskill: FrontSkill): Observable<any> {
    return this.httpClient.post<any>(this.frontskillURL + '/create', frontskill)
  }

  public update(id: number, frontskill: FrontSkill): Observable<any> {
    return this.httpClient.put<any>(this.frontskillURL + `/update/${id}`, frontskill)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.frontskillURL + `/delete/${id}`)
  }
  
}
