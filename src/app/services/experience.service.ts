import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  expURL = environment.url + "/explab"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.expURL + '/list')
  }

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.expURL + `/detail/${id}`)
  }

  public save(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(this.expURL + '/create', experience)
  }

  public update(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `/update/${id}`, experience)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `/delete/${id}`)
  }

}
