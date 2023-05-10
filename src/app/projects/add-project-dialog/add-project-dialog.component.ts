import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit {
  addProjectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<AddProjectDialogComponent>
  ) {
    this.addProjectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addProjectForm.valid) {
      this.projectService.createProject(this.addProjectForm.value).subscribe(
        (response: any) => {
          console.log('Project added successfully:', response);
          this.dialogRef.close(true);
        },
        (error: any) => {
          console.error('Error adding project:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
