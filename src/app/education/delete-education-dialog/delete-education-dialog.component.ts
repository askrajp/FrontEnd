import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Education } from '../../models/education';

@Component({
  selector: 'app-delete-education-dialog',
  templateUrl: './delete-education-dialog.component.html',
  styleUrls: ['./delete-education-dialog.component.css']
})
export class DeleteEducationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteEducationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Education
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close(this.data);
  }
}
