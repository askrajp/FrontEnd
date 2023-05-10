import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-delete-skill-dialog',
  templateUrl: './delete-skill-dialog.component.html',
  styleUrls: ['./delete-skill-dialog.component.css']
})
export class DeleteSkillDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteSkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close(this.data);
  }
}