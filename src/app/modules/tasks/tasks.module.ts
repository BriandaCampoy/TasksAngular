import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { TaskComponent } from './pages/task/task.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

/**
 * Module for managing tasks and related components.
 */
@NgModule({
  declarations: [
    AddTaskComponent,
    TaskComponent,
    TasksListComponent,
    FormTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TasksModule { }
