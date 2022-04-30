import { Host, NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './student/student/student.component';
import { DepartmentComponent } from './department/department/department.component';
import { DeleteComponent } from './delete/delete.component';
import { ShowComponent } from './show/show.component';

const routes:Routes=[
     {path:'',redirectTo:'department',pathMatch:'full'},
    {path:'student',component:HomeComponent},
    {path:'department',component:DepartmentComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'department/show/:id',component:ShowComponent},
    {path:'department/add',component:AddComponent},
    {path:'department/edit/:id',component:EditComponent},
    {path:'**',component:NotfoundComponent},
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
     ],
    exports: [RouterModule]
  
  
})
export class AppRoutingModule { } 