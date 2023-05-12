import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-add-education-dialog',
  templateUrl: './add-education-dialog.component.html',
  styleUrls: ['./add-education-dialog.component.css']
})
export class AddEducationDialogComponent implements OnInit {
  addEducationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private educationService: EducationService,
    public dialogRef: MatDialogRef<AddEducationDialogComponent>
  ) {
    this.addEducationForm = this.fb.group({
      title: ['', Validators.required],
      institution: ['', Validators.required],
      years: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addEducationForm.valid) {
      this.educationService.createEducation(this.addEducationForm.value).subscribe(
        (response: any) => {
          console.log('Education added successfully:', response);
          this.dialogRef.close(true);
        },
        (error: any) => {
          console.error('Error adding education:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
