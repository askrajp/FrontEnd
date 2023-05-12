import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private apiUrl = 'https://askrabe.onrender.com/api/education';

  constructor(private http: HttpClient) {}

  getEducation(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getAllEducation(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get`);
  }
  createEducation(education: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, education);
  }

  updateEducation(education: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${education.id}`, education);
  }

  deleteEducation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
