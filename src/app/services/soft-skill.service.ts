import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SoftSkill } from '../models/soft-skill.model';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  softskillURL = environment.url + "/softskill";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<SoftSkill[]> {
    return this.httpClient.get<SoftSkill[]>(this.softskillURL + '/list');
  }

  public detail(id: number): Observable<SoftSkill> {
    return this.httpClient.get<SoftSkill>(this.softskillURL + `/detail/${id}`);
  }

  public save(softskill: SoftSkill): Observable<any> {
    return this.httpClient.post<any>(this.softskillURL + '/create', softskill);
  }

  public update(id: number, softskill: SoftSkill): Observable<any> {
    return this.httpClient.put<any>(this.softskillURL + `/update/${id}`, softskill);
  }

  public updatePos(id: number, softskill: SoftSkill): Observable<any> {
    return this.httpClient.put<any>(this.softskillURL + `/updatepos/${id}`, softskill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.softskillURL + `/delete/${id}`);
  }
  
}
