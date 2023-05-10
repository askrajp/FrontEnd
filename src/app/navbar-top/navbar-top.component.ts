import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent {
  isLoggedIn$: Observable<boolean>;
  

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}

