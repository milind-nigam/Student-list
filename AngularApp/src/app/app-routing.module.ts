import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../app/student/student.component';
import { AddStudentComponent } from '../app/add-student/add-student.component';
import { StudentDetailsComponent } from '../app/student-details/student-details.component';

const routes: Routes = [
   {
     path: 'students',
     component: StudentComponent
   },
   {
     path: 'student/add',
     component: AddStudentComponent
   },
   {
     path: 'students/:Sno',
     component: StudentDetailsComponent
   },
   {
     path: '',
     redirectTo: 'students',
     pathMatch: 'full'
   },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
