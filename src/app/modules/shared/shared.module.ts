import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListedComponent } from './components/tasks-listed/tasks-listed.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { DateFormaterPipe } from '../../pipes/date-formater.pipe';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { SubjectItemComponent } from './components/subject-item/subject-item.component';


@NgModule({
  declarations: [
    DateFormaterPipe,
    TasksListedComponent,
    TaskItemComponent,
    ConfirmationModalComponent,
    SubjectItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateFormaterPipe,
    TasksListedComponent,
    TaskItemComponent,
    SubjectItemComponent
  ]
})
export class SharedModule { }
