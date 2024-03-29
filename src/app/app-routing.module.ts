import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentlistComponent } from './studentlist/studentlist.component';

import {CreateStudentComponent} from './create-student/create-student.component';
import {UpdateStudentComponent } from './update-student/update-student.component';
const routes: Routes = [
  {path:'student',component:StudentlistComponent},
   {path:'', redirectTo:'student',pathMatch:'full'},
   {path:'create-student',component:CreateStudentComponent},
   {path:'update-student/:id',component:UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
