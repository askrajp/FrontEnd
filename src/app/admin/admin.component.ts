import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProfile } from '../models/user-profile';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userProfile: any;
  userProfileName: string;
  editProfileForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.userProfileName = '';
    this.editProfileForm = this.formBuilder.group({
      occupation: ['', Validators.required],
      residence: ['', Validators.required],
      mobilityAvailability: [false],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.authService.getUserProfile(1).subscribe(
      (response) => {
        this.userProfile = response;
        this.editProfileForm.patchValue({
          occupation: this.userProfile.occupation,
          residence: this.userProfile.residence,
          mobilityAvailability: this.userProfile.mobilityAvailability,
          description: this.userProfile.description,
          email: this.userProfile.email,
          password: this.userProfile.password,
        });
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.editProfileForm.valid) {
      const updatedProfile: UserProfile = {
        id: this.userProfile.id,
        ...this.userProfile,
        userProfileName: this.userProfileName,
        ...this.editProfileForm.value,
      };
  
      this.authService.updateUserProfile(updatedProfile).subscribe(
        (response: UserProfile) => {
          this.userProfile = response;
          console.log('Perfil actualizado:', this.userProfile);
        },
        (error: any) => {
          console.error('Error al actualizar el perfil del usuario:', error);
        }
      );
    }
  }
  
}