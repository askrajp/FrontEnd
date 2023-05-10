import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { differenceInYears } from 'date-fns';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any = {
    firstName: '',
    lastName: '',
    occupation: '',
    description: ''
  };
  userAge: number | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserProfile(1).subscribe(
      (response) => {
        this.userProfile = response;
        this.userAge = differenceInYears(new Date(), new Date(this.userProfile.birthDate));

      },
      (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }
}
