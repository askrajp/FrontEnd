import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/user';
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('authToken');
    this.loggedIn = new BehaviorSubject<boolean>(!!token);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password
    };

    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  getEmail(id: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/email/${id}`);
  }

  getId(email: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/id/${email}`);
  }

  getUserProfile(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  setLoggedIn(loggedIn: boolean): void {
    this.loggedIn.next(loggedIn);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  updateUserProfile(userProfile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.apiUrl}/update/${userProfile.id}`, userProfile);
  }
  
  logout(): void {
 
    localStorage.removeItem('authToken');
    this.setLoggedIn(false);
  }
    
}
