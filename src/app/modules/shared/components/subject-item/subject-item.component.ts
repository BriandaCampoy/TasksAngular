import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '@interfaces/subject';

/**
 * Component representing an individual subject item.
 */
@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
})
export class SubjectItemComponent {
  constructor(private router: Router) {}

  /**
   * Input property to receive the subject item to be displayed.
   */
  @Input() subjectItem!: Subject;

  /**
   * Navigates to the subject's details page.
   */
  toSubject() {
    this.router.navigate(['app/subject/', this.subjectItem._id]);
  }
}
