import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiUrl = 'https://askrabe.onrender.com/api/skills';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getAllSkills(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get`);
  }
  createSkill(skill: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, skill);
  }

  updateSkill(skill: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${skill.id}`, skill);
  }

  deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
