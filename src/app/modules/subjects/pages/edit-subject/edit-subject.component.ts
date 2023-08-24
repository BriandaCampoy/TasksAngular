import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '@interfaces/subject';
import { SubjectService } from '@services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent {

  constructor(
     private subjectService:SubjectService,
     private route:ActivatedRoute
  ){}

  subjectEditable:Subject = {
    name:'',
    color:'',
    _id: this.route.snapshot.params['id'],
  }


  ngOnInit() {
    this.subjectService.getSubject(this.subjectEditable._id).subscribe(sub=>{
      this.subjectEditable._id = sub._id;
      this.subjectEditable.color = sub.color;
      this.subjectEditable.name = sub.name;

    })
  }

}
