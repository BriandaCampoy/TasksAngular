import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormActions } from '@interfaces/form-actions';
import { Subject } from '@interfaces/subject';
import { SubjectService } from '@services/subject.service';

/**
 * Component for handling subject form submission, both for adding and updating subjects.
 */
@Component({
  selector: 'app-form-subject',
  templateUrl: './form-subject.component.html',
})
export class FormSubjectComponent {
  constructor(private subjectService: SubjectService, private router: Router) {}

  /**
   * Indicates the action to be performed by the form (create or update).
   */
  @Input() actionForm!: FormActions;

  /**
   * The subject data to be displayed and edited in the form.
   */
  @Input() subjectItem: Subject = {
    _id: '',
    name: '',
    color: '',
  };

  /**
   * Handles the form submission based on the actionForm value.
   */
  handleSubmit() {
    if (this.actionForm === 'create') {
      this.addSubject();
    } else {
      this.updateSubject();
    }
  }

  /**
   * Updates an existing subject's details.
   */
  updateSubject() {
    this.subjectService.updateSubject(this.subjectItem).subscribe((res) => {
      this.router.navigate(['app/subject']);
    });
  }

  /**
   * Adds a new subject to the system.
   */
  addSubject() {
    const { _id, ...newSubject } = this.subjectItem;
    this.subjectService.createSubject(newSubject).subscribe((res) => {
      this.router.navigate(['app/subject']);
    });
  }
}
