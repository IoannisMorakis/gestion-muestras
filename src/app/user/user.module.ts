import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectNewComponent } from './components/project-new/project-new.component';
import { FormsModule } from '@angular/forms';
import { MuestrasComponent } from './components/muestras/muestras.component';
import { MuestrasNewComponent } from './components/muestras-new/muestras-new.component';
import { ScanComponent } from './components/scan/scan.component';
import { BarcodeComponent } from './components/barcode/barcode.component';

import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { SafePipe } from './safe.pipe';
import { MuestrasEditComponent } from './components/muestras-edit/muestras-edit.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';

LOAD_WASM().subscribe((res: any) => console.log('LOAD_WASM', res))



@NgModule({
  declarations: [
    UserComponent,
    ProjectsComponent,
    ProjectNewComponent,
    MuestrasComponent,
    MuestrasNewComponent,
    ScanComponent,
    BarcodeComponent,
    SafePipe,
    MuestrasEditComponent,
    ProjectEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NgxScannerQrcodeModule
  ]
})
export class UserModule { }
