import { Component } from '@angular/core';
import { SidebarService } from '@services/toggle.service';

/**
 * Component responsible for the application's aside (sidebar) content.
 */
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
})
export class AsideComponent {
  constructor(private sidebarService: SidebarService) {}

  /**
   * Handler for toggling the visibility of the sidebar.
   */
  onToggleSidebar() {
    this.sidebarService.toggleAction();
  }
}
