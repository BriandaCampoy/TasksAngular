import { Component } from '@angular/core';
import { UserInterface } from '@interfaces/user.interface';
import { AuthService } from '@services/auth.service';
import { SidebarService } from '@services/toggle.service';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/confirmation-modal/confirmation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

/**
 * Component responsible for the application's navigation bar.
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  /**
   * The currently logged-in user's information.
   */
  userLogged: UserInterface | undefined;

  /**
   * Initializes the component by fetching the user's profile information.
   */
  ngOnInit() {
    this.authService.getProfile().subscribe((res) => {
      this.userLogged = res;
    });
  }

  /**
   * Handles the user logout process, including confirmation.
   */
  onLogout() {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.title = 'Logout';
    modalRef.componentInstance.message = 'you want to logout?';
    modalRef.componentInstance.result = false;
    modalRef.componentInstance.confirmed.subscribe((receivedEntry: boolean) => {
      if (receivedEntry) {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    });
  }

  /**
   * Handler for toggling the visibility of the sidebar.
   */
  onToggleSidebar() {
    this.sidebarService.toggleAction();
  }

  /**
   * Handler for toggling the visibility of a dropdown menu.
   */
  onToggleDropdown() {
    const dropdown = document.querySelector('#dropdown-button');
    const options = document.querySelector('#dropdown-options');

    if (dropdown?.classList.contains('show')) {
      dropdown.classList.remove('show');
      options?.classList.remove('show');
    } else {
      dropdown?.classList.add('show');
      options?.classList.add('show');
    }
  }
}
