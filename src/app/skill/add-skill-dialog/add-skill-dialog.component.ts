import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-add-skill-dialog',
  templateUrl: './add-skill-dialog.component.html',
  styleUrls: ['./add-skill-dialog.component.css']
})
export class AddSkillDialogComponent implements OnInit {
  addSkillForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private skillsService: SkillsService,
    public dialogRef: MatDialogRef<AddSkillDialogComponent>
  ) {
    this.addSkillForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addSkillForm.valid) {
      this.skillsService.createSkill(this.addSkillForm.value).subscribe(
        (response: any) => {
          console.log('Skill added successfully:', response);
          this.dialogRef.close(true);
        },
        (error: any) => {
          console.error('Error adding skill:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
