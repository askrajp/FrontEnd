import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Education } from '../../models/education';

@Component({
  selector: 'app-edit-education-dialog',
  templateUrl: './edit-education-dialog.component.html',
  styleUrls: ['./edit-education-dialog.component.css'],
})
export class EditEducationDialogComponent implements OnInit {
  editEducationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditEducationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Education
  ) {
    this.editEducationForm = this.fb.group({
      courseTitle: [data.courseTitle, Validators.required],
      institutionName: [data.institutionName, Validators.required],
      yearsAttended: [data.yearsAttended, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.editEducationForm.valid) {
      const updatedEducation: Education = {
        ...this.editEducationForm.value,
        id: this.data.id
      };
      this.dialogRef.close(updatedEducation);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
