import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import {ShowComponent} from './show/show.component'
import { EditComponent } from './edit/edit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './student/student/student.component';


import { DepartmentComponent } from './department/department/department.component';
import { StudentModule } from './student/student.module';

import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';







@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    NotfoundComponent,
    DeleteComponent,
    EditComponent,
    AddComponent,
    ShowComponent,
    DepartmentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StudentModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
