import { Component } from '@angular/core';
import { SidebarService } from '@services/toggle.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
})
export class AsideComponent {
  constructor(private sidebarService: SidebarService) { }

  onToggleSidebar() {
    this.sidebarService.toggleAction();
  }
}
