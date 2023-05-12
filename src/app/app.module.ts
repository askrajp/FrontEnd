import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddSkillDialogComponent } from './skill/add-skill-dialog/add-skill-dialog.component';
import { EditSkillDialogComponent } from './skill/edit-skill-dialog/edit-skill-dialog.component';
import { DeleteSkillDialogComponent } from './skill/delete-skill-dialog/delete-skill-dialog.component';
import { AddProjectDialogComponent } from './projects/add-project-dialog/add-project-dialog.component';
import { EditProjectDialogComponent } from './projects/edit-project-dialog/edit-project-dialog.component';
import { DeleteProjectDialogComponent } from './projects/delete-project-dialog/delete-project-dialog.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ProyectsComponent } from './proyects/proyects.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { EditEducationDialogComponent } from './education/edit-education-dialog/edit-education-dialog.component';
import { AddEducationDialogComponent } from './education/add-education-dialog/add-education-dialog.component';
import { DeleteEducationDialogComponent } from './education/delete-education-dialog/delete-education-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarTopComponent,
    NavbarBottomComponent,
    ProfileComponent,
    LoginComponent,
    SkillsComponent,
    EducationComponent,
    AdminComponent,
    AddSkillDialogComponent,
    EditSkillDialogComponent,
    DeleteSkillDialogComponent,
    AddProjectDialogComponent,
    EditProjectDialogComponent,
    DeleteProjectDialogComponent,
    AddProjectDialogComponent,
    EditProjectDialogComponent,
    DeleteProjectDialogComponent,
    ProyectsComponent,
    EditEducationDialogComponent,
    AddEducationDialogComponent,
    DeleteEducationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    NgxPageScrollModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule {
}