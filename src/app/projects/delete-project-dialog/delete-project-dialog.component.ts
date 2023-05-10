import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../models/project';

@Component({
  selector: 'app-delete-project-dialog',
  templateUrl: './delete-project-dialog.component.html',
  styleUrls: ['./delete-project-dialog.component.css']
})
export class DeleteProjectDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close(this.data);
  }
}
