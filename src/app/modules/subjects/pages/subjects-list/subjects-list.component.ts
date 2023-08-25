import { Component } from '@angular/core';
import { Subject } from '@interfaces/subject';
import { SubjectService } from '@services/subject.service';

/**
 * Component for displaying a list of subjects.
 */
@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
})
export class SubjectsListComponent {
  /**
   * Array of subject items to be displayed.
   */
  subjectItems: Subject[] = [];

  constructor(private subjectService: SubjectService) {}

  /**
   * Lifecycle hook that gets called when the component is initialized.
   * Fetches the subjects and populates the subjectItems array.
   */
  ngOnInit() {
    this.subjectService.getSubjectByUser().subscribe((subjects) => {
      this.subjectItems = subjects;
    });
  }
}
