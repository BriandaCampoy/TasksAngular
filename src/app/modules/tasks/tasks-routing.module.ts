import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TaskComponent } from './pages/task/task.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

/**
 * Routing module for tasks-related components.
 */
const routes: Routes = [
  {
    path: '',
    component: TasksListComponent
  },
  {
    path:'addtask',
    pathMatch:'full',
    component: AddTaskComponent
  },
  {
    path: 'edit/:id',
    component:EditTaskComponent
  },
  {
    path:':id',
    component:TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
