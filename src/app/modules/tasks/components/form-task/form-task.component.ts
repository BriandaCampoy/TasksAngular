import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTask } from '@interfaces/create-task';
import { FormActions } from '@interfaces/form-actions';
import { Subject } from '@interfaces/subject';
import { Task, UpdateTaskRequest } from '@interfaces/task';
import { SubjectService } from '@services/subject.service';
import { TaskService } from '@services/task.service';

/**
 * Component for displaying a form to add or update a task.
 */
@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
})
export class FormTaskComponent {
  constructor(
    private subjectService: SubjectService,
    private taskService: TaskService,
    private router: Router
  ) {}

  // List of available subject options
  subjectsOptions: Subject[] = [];

  // Action form type (create or update)
  @Input() actionForm!: FormActions;

  // Task to be updated (if applicable)
  @Input() task: UpdateTaskRequest = {
    title: '',
    description: '',
    deadline: new Date(),
    type: 'homework',
    subject: '',
    _id: '',
    done: false,
  };

  // Default subject option (for creating new task)
  defaultSubject: Subject | undefined;

  /**
   * Lifecycle hook that fetches the subjects options when the component is initialized.
   * Sets the default subject option for creating new tasks.
   */
  ngOnInit() {
    // Fetch subjects options for the form
    this.subjectService.getSubjectByUser().subscribe((res) => {
      this.subjectsOptions = res;
      this.defaultSubject = res[0];
    });
  }

  /**
   * Handles the form submission based on the actionForm type.
   * Calls either addTask() or updateTask() accordingly.
   */
  handleSubmit() {
    if (this.actionForm === 'create') {
      this.addTask();
    } else {
      this.updateTask();
    }
  }

  /**
   * Adds a new task using the taskService's createTask() method.
   * Navigates back to the task list after successful creation.
   */
  addTask() {
    const { _id, done, ...newTask } = this.task;
    this.taskService.createTask(newTask).subscribe((res) => {
      this.router.navigate(['../']);
    });
  }

  /**
   * Adds a new task using the taskService's createTask() method.
   * Navigates back to the task list after successful creation.
   */
  updateTask() {
    this.taskService.updateTask(this.task).subscribe((res) => {
      this.router.navigate(['../']);
    });
  }
}
