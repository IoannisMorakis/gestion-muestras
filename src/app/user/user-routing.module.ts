import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MuestrasComponent } from './components/muestras/muestras.component';
import { BarcodeComponent } from './components/barcode/barcode.component';
import { ProjectNewComponent } from './components/project-new/project-new.component';
import { MuestrasNewComponent } from './components/muestras-new/muestras-new.component';
import { ScanComponent } from './components/scan/scan.component';


const routes: Routes = [
  {
    path:'user', component: UserComponent, children:[
    {path: 'projects', component: ProjectsComponent},
    {path: 'project-new', component: ProjectNewComponent},
    {path: 'barcode', component:BarcodeComponent},
    {path: 'muestras', component:MuestrasComponent},
    {path: 'muestras-new', component:MuestrasNewComponent},
    {path: 'scan', component:ScanComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
