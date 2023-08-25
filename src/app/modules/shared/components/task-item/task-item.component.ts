import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Task, UpdateTaskRequest } from '@interfaces/task';
import { TaskService } from '@services/task.service';

/**
 * Component representing an individual task item.
 */
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  constructor(private taskService: TaskService, private router: Router) {}

  /**
   * Input property to receive the task item to be displayed.
   */
  @Input() taskItem!: Task;

  /**
   * Marks the task as done and updates it.
   * @param event The event triggered by the done action.
   */
  onDone(event: Event) {
    event.stopPropagation();
    this.taskItem.done = true;
    const taskDone: UpdateTaskRequest = {
      title: this.taskItem.title,
      description: this.taskItem.description,
      deadline: this.taskItem.deadline,
      done: true,
      type: this.taskItem.type,
      subject: this.taskItem.subject._id,
      _id: this.taskItem._id,
    };
    this.taskService.updateTask(taskDone).subscribe();
  }

  /**
   * Navigates to the task's details page.
   */
  onSeeDetails() {
    this.router.navigate([`app/task/${this.taskItem._id}`]);
  }
}
