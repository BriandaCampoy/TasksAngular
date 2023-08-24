import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '@interfaces/task';
import { TaskService } from '@services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent {
  constructor(private taskService: TaskService, private router: Router) {}
  searchedValue: string = '';
  tasksItems: Task[] = [];

  ngOnInit() {
    this.getTasks()
  }

  getTasks() {
    this.taskService.getTasksByUser(this.searchedValue).subscribe((tasks) => {
      this.tasksItems = tasks;
    });
  }

  doSearch() {
    this.getTasks()
  }
}
