import { Component } from '@angular/core';
import { Subject } from '@interfaces/subject';
import { SubjectService } from '@services/subject.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css'],
})
export class SubjectsListComponent {
  subjectItems: Subject[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.subjectService.getSubjectByUser().subscribe((subjects) => {
      this.subjectItems = subjects;
    });
  }
}
