import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsListComponent } from './pages/subjects-list/subjects-list.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { AddSubjectComponent } from './pages/add-subject/add-subject.component';
import { FormSubjectComponent } from './components/form-subject/form-subject.component';
import { EditSubjectComponent } from './pages/edit-subject/edit-subject.component';

/**
 * Module for managing subjects-related functionality.
 */
@NgModule({
  /**
   * Declarations of components, pipes, and directives that belong to this module.
   */
  declarations: [
    SubjectsListComponent,
    SubjectComponent,
    AddSubjectComponent,
    FormSubjectComponent,
    EditSubjectComponent,
  ],
  /**
   * Modules that this module depends on.
   */
  imports: [CommonModule, SubjectsRoutingModule, FormsModule, SharedModule],
})
export class SubjectsModule {}
