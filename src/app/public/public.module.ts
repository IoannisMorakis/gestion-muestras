import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PublicComponent } from './public.component';



@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
