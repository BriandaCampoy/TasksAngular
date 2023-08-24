import { Component, Input } from '@angular/core';
import { Task } from '@interfaces/task';

@Component({
  selector: 'app-tasks-listed',
  templateUrl: './tasks-listed.component.html',
})
export class TasksListedComponent {
  @Input() TasksItems!:Task[];
}
