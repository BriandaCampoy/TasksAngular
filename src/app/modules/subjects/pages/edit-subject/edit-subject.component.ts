import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '@interfaces/subject';
import { SubjectService } from '@services/subject.service';

/**
 * Component for editing a subject's details.
 */
@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
})
export class EditSubjectComponent {
  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute
  ) {}

  /**
   * Subject object to hold editable subject details.
   */
  subjectEditable: Subject = {
    name: '',
    color: '',
    _id: this.route.snapshot.params['id'],
  };

  /**
   * Subject object to hold editable subject details.
   */
  ngOnInit() {
    this.subjectService
      .getSubject(this.subjectEditable._id)
      .subscribe((sub) => {
        this.subjectEditable._id = sub._id;
        this.subjectEditable.color = sub.color;
        this.subjectEditable.name = sub.name;
      });
  }
}
