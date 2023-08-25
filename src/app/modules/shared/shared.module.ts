import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListedComponent } from './components/tasks-listed/tasks-listed.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { DateFormaterPipe } from '../../pipes/date-formater.pipe';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { SubjectItemComponent } from './components/subject-item/subject-item.component';

/**
 * Module for shared components and utilities across the application.
 */
@NgModule({
  /**
   * Declarations of components, pipes, and directives that belong to this module.
   */
  declarations: [
    DateFormaterPipe,
    TasksListedComponent,
    TaskItemComponent,
    ConfirmationModalComponent,
    SubjectItemComponent,
  ],
  /**
   * Declarations of components, pipes, and directives that belong to this module.
   */
  imports: [CommonModule],
  /**
   * Components, pipes, and directives that are made available for other modules to use.
   */
  exports: [
    DateFormaterPipe,
    TasksListedComponent,
    TaskItemComponent,
    SubjectItemComponent,
  ],
})
export class SharedModule {}
