import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '@interfaces/task';
import { TaskService } from '@services/task.service';

/**
 * Component to display and manage a list of tasks.
 */
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent {
  constructor(private taskService: TaskService, private router: Router) {}
  searchedValue: string = '';
  tasksItems: Task[] = [];

  /**
   * Initializes the component by fetching tasks.
   */
  ngOnInit() {
    this.getTasks();
  }

  /**
   * Fetches tasks based on the searched value.
   */
  getTasks() {
    this.taskService.getTasksByUser(this.searchedValue).subscribe((tasks) => {
      this.tasksItems = tasks;
    });
  }

  /**
   * Initiates a task search based on the entered value.
   */
  doSearch() {
    this.getTasks();
  }
}
