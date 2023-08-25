import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from '@interfaces/subject';
import { Task } from '@interfaces/task';
import { TaskService } from '@services/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/confirmation-modal/confirmation-modal.component';
import { SubjectService } from '@services/subject.service';

/**
 * Component for displaying subject details and related tasks.
 */
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
})
export class SubjectComponent {
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private subjectService: SubjectService
  ) {}

  /**
   * Subject object to hold subject details.
   */
  subject: Subject = {
    _id: this.route.snapshot.params['id'],
    name: '',
    color: '',
  };

  /**
   * Array of tasks related to the subject.
   */
  tasksItems: Task[] = [];

  /**
   * Lifecycle hook that gets called when the component is initialized.
   * Fetches tasks related to the subject and updates subject details.
   */
  ngOnInit() {
    this.taskService.getTaskBySubject(this.subject._id).subscribe((tasks) => {
      this.tasksItems = tasks;
      if (tasks.length !== 0) {
        this.subject = tasks[0].subject;
      } else {
        this.subjectService.getSubject(this.subject._id).subscribe((sub) => {
          this.subject = sub;
        });
      }
    });
  }

  /**
   * Lifecycle hook that gets called when the component is initialized.
   * Fetches tasks related to the subject and updates subject details.
   */
  onDelete() {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.title = 'Are you sure?';
    modalRef.componentInstance.message =
      'you want to delete this subject and all its tasks?';
    modalRef.componentInstance.result = false;
    modalRef.componentInstance.confirmed.subscribe((receivedEntry: boolean) => {
      if (receivedEntry) {
        this.subjectService.deleteSubject(this.subject._id).subscribe((res) => {
          this.router.navigate(['/']);
        });
      }
    });
  }
}
