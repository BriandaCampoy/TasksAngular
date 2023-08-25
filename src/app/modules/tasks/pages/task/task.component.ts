import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, UpdateTaskRequest } from '@interfaces/task';
import { TaskService } from '@services/task.service';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/confirmation-modal/confirmation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Component to display details of a task and perform related actions.
 */
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  taskItem: Task = {
    _id: '',
    title: '',
    description: '',
    deadline: new Date(),
    subject: {
      name: '',
      color: '',
      _id: '',
    },
    type: 'homework',
    done: false,
  };
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router
  ) {}

  /**
   * Initializes the component by fetching the task details.
   */
  ngOnInit() {
    this.taskItem._id = this.route.snapshot.params['id'];
    this.taskService.getTask(this.taskItem._id).subscribe((res) => {
      this.taskItem = res;
    });
  }

  /**
   * Marks the task as done and updates it on the server.
   */
  onDone() {
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
   * Opens a confirmation modal before deleting the task.
   */
  onDelete() {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.title = 'Are you sure?';
    modalRef.componentInstance.message = 'you want to delete this task?';
    modalRef.componentInstance.result = false;
    modalRef.componentInstance.confirmed.subscribe((receivedEntry: boolean) => {
      if (receivedEntry) {
        this.taskService
          .deleteTask(this.taskItem._id)
          .subscribe((res) => this.router.navigate(['/']));
      }
    });
  }
}
