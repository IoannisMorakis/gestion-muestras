import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectNewComponent } from './components/project-new/project-new.component';
import { FormsModule } from '@angular/forms';
import { MuestrasComponent } from './components/muestras/muestras.component';
import { MuestrasNewComponent } from './components/muestras-new/muestras-new.component';


@NgModule({
  declarations: [
    UserComponent,
    ProjectsComponent,
    ProjectNewComponent,
    MuestrasComponent,
    MuestrasNewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
