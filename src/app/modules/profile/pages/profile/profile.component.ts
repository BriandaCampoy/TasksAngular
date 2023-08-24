import { Component } from '@angular/core';
import { Subject } from '@interfaces/subject';
import { UserInterface } from '@interfaces/user.interface';
import { AuthService } from '@services/auth.service';
import { SubjectService } from '@services/subject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(
    private authService: AuthService,
    private subjectService:SubjectService
    ) {}

  user: UserInterface | undefined;
  subjectsUser:Subject[]=[];

  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{
      this.user = res
    })
    this.subjectService.getSubjectByUser().subscribe(subsjects=>{
      this.subjectsUser = subsjects
    })
  }

}
