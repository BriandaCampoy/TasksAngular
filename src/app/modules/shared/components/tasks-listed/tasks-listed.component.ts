import { Component, Input } from '@angular/core';
import { Task } from '@interfaces/task';

/**
 * Component for listing tasks.
 */
@Component({
  selector: 'app-tasks-listed',
  templateUrl: './tasks-listed.component.html',
})
export class TasksListedComponent {
  /**
   * Input property to receive the list of tasks to be displayed.
   */
  @Input() TasksItems!: Task[];
}
