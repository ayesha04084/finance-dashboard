import { Component } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   constructor(private state: StateService) {}

  changeRole(event: any) {
    const role = event.target.value;
    this.state.setRole(role);
  }
  toggleSidebar() {
    this.state.toggleSidebar();
    console.log('clicked');
  }
  toggleTheme() {
    this.state.toggleDarkMode();
  }
}
