import { Component, OnInit } from '@angular/core';
import { Education } from '../models/education';
import { EducationService } from '../services/education.service';
import { AuthService } from '../services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddEducationDialogComponent } from '../education/add-education-dialog/add-education-dialog.component';
import { EditEducationDialogComponent } from '../education/edit-education-dialog/edit-education-dialog.component';
import { DeleteEducationDialogComponent } from '../education/delete-education-dialog/delete-education-dialog.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private educationService: EducationService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.educationService.getAllEducation().subscribe((educations: Education[]) => {
      this.educations = educations;
    });
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  openAddEducationDialog(): void {
    const dialogRef: MatDialogRef<AddEducationDialogComponent> = this.dialog.open(AddEducationDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.educations.push(result);
        setTimeout(() => {
          this.ngOnInit();
        });
      }
    });
  }

  openEditEducationDialog(education: Education): void {
    const dialogRef: MatDialogRef<EditEducationDialogComponent> = this.dialog.open(EditEducationDialogComponent, {
      width: '400px',
      data: { ...education }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.educationService.updateEducation(result).subscribe(() => {
          console.log('editando');
        });
        const index = this.educations.findIndex(e => e.id === result.id);
        if (index >= 0) {
          this.educations[index] = result;
          setTimeout(() => {
            this.ngOnInit();
          });
        }
      }
    });
  }

  openDeleteEducationDialog(education: Education): void {
    const dialogRef: MatDialogRef<DeleteEducationDialogComponent> = this.dialog.open(DeleteEducationDialogComponent, {
      width: '400px',
      data: { ...education }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.educationService.deleteEducation(result.id).subscribe(() => {
          const index = this.educations.findIndex(e => e.id === result.id);
          if (index >= 0) {
            this.educations.splice(index, 1);
            setTimeout(() => {
              this.ngOnInit();
            });
          }
        });
      }
    });
  }
}
