import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { Skill } from '../models/skill';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { AddProjectDialogComponent } from '../projects/add-project-dialog/add-project-dialog.component';
import { EditProjectDialogComponent } from '../projects/edit-project-dialog/edit-project-dialog.component';
import { DeleteProjectDialogComponent } from '../projects/delete-project-dialog/delete-project-dialog.component';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  skills: Skill[] = [];
  skillsByCategory: Map<string, Skill[]> = new Map();
  isLoggedIn: boolean = false;
  projects: Project[] = [];
  displayedColumns: string[] = ['name', 'description', 'edit', 'delete'];

  constructor(
    private skillsService: SkillsService,
    private authService: AuthService,
    private projectService: ProjectService,
    public dialog: MatDialog
  ) {}

  

  
  ngOnInit() {
    this.skillsService.getAllSkills().subscribe((skills: Skill[]) => {
        this.projectService.getProjects().subscribe((projects: Project[]) => {
        this.projects = projects;
      });
    });
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

 
 
  openAddProjectDialog(): void {
    const dialogRef: MatDialogRef<AddProjectDialogComponent> = this.dialog.open(AddProjectDialogComponent, {
      width: '400px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projects.push(result);
        setTimeout(() => {
          this.ngOnInit();
        });
      }
    })
    ;
  }
  
  openEditProjectDialog(project: Project): void {
    const dialogRef: MatDialogRef<EditProjectDialogComponent> = this.dialog.open(EditProjectDialogComponent, {
      width: '400px',
      data: { ...project }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectService.updateProject(result).subscribe(() => {
        console.log('editando');
        });
        const index = this.projects.findIndex(p => p.id === result.id);
        if (index >= 0) {
          this.projects[index] = result;
          setTimeout(() => {
            this.ngOnInit();
          });
        }
      }
    });
  }
  
  openDeleteProjectDialog(project: Project): void {
    const dialogRef: MatDialogRef<DeleteProjectDialogComponent> = this.dialog.open(DeleteProjectDialogComponent, {
      width: '400px',
      data: { ...project }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectService.deleteProject(result.id).subscribe(() => {
          const index = this.projects.findIndex(p => p.id === result.id);
          if (index >= 0) {
            this.projects.splice(index, 1);
            setTimeout(() => {
              this.ngOnInit();
            });
          }
        });
      }
    });
  }

}
