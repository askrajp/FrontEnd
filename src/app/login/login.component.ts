import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
        localStorage.setItem('authToken', response.token);

        this.authService.setLoggedIn(true);
             this.router.navigateByUrl('/home');
        
      
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        
      }
    );
  }
}
