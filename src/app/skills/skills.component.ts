import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { Skill } from '../models/skill';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddSkillDialogComponent } from '../skill/add-skill-dialog/add-skill-dialog.component';
import { EditSkillDialogComponent } from '../skill/edit-skill-dialog/edit-skill-dialog.component';
import { DeleteSkillDialogComponent } from '../skill/delete-skill-dialog/delete-skill-dialog.component';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  skillsByCategory: Map<string, Skill[]> = new Map();
  isLoggedIn: boolean = false;
  displayedColumns: string[] = ['name', 'description', 'edit', 'delete'];

  constructor(
    private skillsService: SkillsService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  

  
  ngOnInit() {
    this.skillsService.getAllSkills().subscribe((skills: Skill[]) => {
      console.log('Skills received from API:', skills); 
      this.skills = skills;
      this.skillsByCategory = this.groupByCategory(skills);
        });
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  groupByCategory(skills: Skill[]): Map<string, Skill[]> {
    const groupedSkills = new Map<string, Skill[]>();
  
    for (const skill of skills) {
      if (!groupedSkills.has(skill.category)) {
        groupedSkills.set(skill.category, []);
      }
      groupedSkills.get(skill.category)?.push(skill);
    }
  
    console.log('Grouped skills:', groupedSkills); 
    return groupedSkills;
  }
  
 
  updateSkills(newSkill?: Skill, oldSkill?: Skill) {
    if (oldSkill) {
      const index = this.skills.findIndex(skill => skill.id === oldSkill.id);
      if (index >= 0) {
        if (newSkill) {
          console.log('Is new skill')
          this.skills[index] = newSkill;
        } else {
          console.log('Not a new skill');
          this.skills.splice(index, 1);
        }
      }
    } else if (newSkill) {
      console.log('Ta todo piola');
      this.skills.push(newSkill);
    }

    setTimeout(() => {
      this.skillsByCategory = this.groupByCategory(this.skills);
      this.ngOnInit();
    });
  }

  openAddSkillDialog(): void {
    const dialogRef: MatDialogRef<AddSkillDialogComponent> = this.dialog.open(AddSkillDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateSkills(result);
        console.log(result);
      }
    });
  }

  openEditSkillDialog(skill: Skill): void {
    const dialogRef: MatDialogRef<EditSkillDialogComponent> = this.dialog.open(EditSkillDialogComponent, {
      width: '400px',
      data: { ...skill }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
          this.skillsService.updateSkill(result).subscribe(() => {
          this.updateSkills(result, skill);
          console.log('editando');
        });
      }
    });
  }
  

  openDeleteSkillDialog(skill: Skill): void {
    const dialogRef: MatDialogRef<DeleteSkillDialogComponent> = this.dialog.open(DeleteSkillDialogComponent, {
      width: '400px',
      data: { ...skill }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.skillsService.deleteSkill(result.id).subscribe(() => {
          this.updateSkills(undefined, result);
        });
      }
    });
  }

}
