import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormActions } from '@interfaces/form-actions';
import { Subject } from '@interfaces/subject';
import { SubjectService } from '@services/subject.service';

@Component({
  selector: 'app-form-subject',
  templateUrl: './form-subject.component.html',
  styleUrls: ['./form-subject.component.css'],
})
export class FormSubjectComponent {
  constructor(private subjectService: SubjectService, private router: Router) {}

  @Input() actionForm!: FormActions;

  @Input() subjectItem: Subject = {
    _id: '',
    name: '',
    color: '',
  };

  handleSubmit() {
    if (this.actionForm === 'create') {
      this.addSubject();
    } else {
      this.updateSubject();
    }
  }

  updateSubject() {
    this.subjectService.updateSubject(this.subjectItem).subscribe((res) => {
      this.router.navigate(['app/subject']);
    });
  }

  addSubject() {
    const { _id, ...newSubject } = this.subjectItem;
    this.subjectService.createSubject(newSubject).subscribe((res) => {
      this.router.navigate(['app/subject']);
    });
  }
}
