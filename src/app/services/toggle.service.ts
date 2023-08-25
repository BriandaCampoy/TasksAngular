import { Injectable } from '@angular/core';

/**
 * A service responsible for handling toggling of the sidebar.
 */
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {}

  /**
   * Toggles the visibility of the sidebar.
   */
  toggleAction() {
    const body = document.body;
    const sidebar = document.querySelector('.sidebar');

    if (body.classList.contains('sidebar-toggled')) {
      body.classList.remove('sidebar-toggled');
      sidebar?.classList.remove('toggled');
    } else {
      body.classList.add('sidebar-toggled');
      sidebar?.classList.add('toggled');
    }
  }
}
