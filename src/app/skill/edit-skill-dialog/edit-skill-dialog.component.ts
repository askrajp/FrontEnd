
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Skill } from '../../models/skill';



@Component({
  selector: 'app-edit-skill-dialog',
  templateUrl: './edit-skill-dialog.component.html',
  styleUrls: ['./edit-skill-dialog.component.css'],
})


export class EditSkillDialogComponent implements OnInit {
  editSkillForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditSkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill
  ) {
    this.editSkillForm = this.fb.group({
      name: [data.name, Validators.required],
      category: [data.category, Validators.required],
    });
  }

  ngOnInit(): void {}

  
  onSubmit(): void {
    if (this.editSkillForm.valid) {
      const updatedSkill: Skill = {
        ...this.editSkillForm.value,
        id: this.data.id
      };
      this.dialogRef.close(updatedSkill);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
