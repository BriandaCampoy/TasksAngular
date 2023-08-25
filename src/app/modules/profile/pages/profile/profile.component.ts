import { Component } from '@angular/core';
import { Subject } from '@interfaces/subject';
import { UserInterface } from '@interfaces/user.interface';
import { AuthService } from '@services/auth.service';
import { SubjectService } from '@services/subject.service';

/**
 * Component for displaying the user's profile information and related subjects.
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(
    private authService: AuthService,
    private subjectService: SubjectService
  ) {}

  /**
   * The currently logged-in user's information.
   */
  user: UserInterface | undefined;

  /**
   * The list of subjects associated with the user.
   */
  subjectsUser: Subject[] = [];

  /**
   * Initializes the component by fetching the user's profile and subjects information.
   */
  ngOnInit() {
    this.authService.getProfile().subscribe((res) => {
      this.user = res;
    });
    this.subjectService.getSubjectByUser().subscribe((subsjects) => {
      this.subjectsUser = subsjects;
    });
  }
}
