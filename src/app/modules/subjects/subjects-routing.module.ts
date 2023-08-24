import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './pages/subjects-list/subjects-list.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { AddSubjectComponent } from './pages/add-subject/add-subject.component';
import { EditSubjectComponent } from './pages/edit-subject/edit-subject.component';

const routes: Routes = [
  {
    path: '',
    component:SubjectsListComponent
  },
  {
    path:'addsubject',
    pathMatch:'full',
    component:AddSubjectComponent
  },
  {
    path:':id',
    component: SubjectComponent
  },
  {
    path:'edit/:id',
    component: EditSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
