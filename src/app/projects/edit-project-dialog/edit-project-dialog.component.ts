import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../models/project';

@Component({
  selector: 'app-edit-project-dialog',
  templateUrl: './edit-project-dialog.component.html',
  styleUrls: ['./edit-project-dialog.component.css'],
})
export class EditProjectDialogComponent implements OnInit {
  editProjectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {
    this.editProjectForm = this.fb.group({
      name: [data.name, Validators.required],
      description: [data.description, Validators.required],
      link: [data.link, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.editProjectForm.valid) {
      const updatedProject: Project = {
        ...this.editProjectForm.value,
        id: this.data.id
      };
      this.dialogRef.close(updatedProject);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
