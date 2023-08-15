import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path:'user', component: UserComponent, children:[
    {path: 'projects', component: ProjectsComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
