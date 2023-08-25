import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './pages/subjects-list/subjects-list.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { AddSubjectComponent } from './pages/add-subject/add-subject.component';
import { EditSubjectComponent } from './pages/edit-subject/edit-subject.component';

/**
 * Module routing configuration for managing subjects-related functionality.
 */
const routes: Routes = [
  {
    path: '',
    component: SubjectsListComponent,
  },
  {
    path: 'addsubject',
    pathMatch: 'full',
    component: AddSubjectComponent,
  },
  {
    path: ':id',
    component: SubjectComponent,
  },
  {
    path: 'edit/:id',
    component: EditSubjectComponent,
  },
];

/**
 * Imports the defined routes into the router module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectsRoutingModule {}
