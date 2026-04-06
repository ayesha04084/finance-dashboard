import { Component,OnInit } from '@angular/core';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isOpen = false;

  constructor(private state: StateService) {}

  ngOnInit() {
    this.state.sidebarOpen$.subscribe(val => {
      console.log('sidebar state:', val);
      this.isOpen = val;
    });
  }
  closeSidebar() {
    this.state.closeSidebar(); // ✅ ONLY CLOSE
  }
}