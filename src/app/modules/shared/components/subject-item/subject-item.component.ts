import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '@interfaces/subject';

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.css'],
})
export class SubjectItemComponent {

  constructor(
    private router:Router
  ) {}

  @Input() subjectItem!: Subject;

  toSubject() {
    this.router.navigate(['app/subject/', this.subjectItem._id])
  }
}
