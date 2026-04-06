import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.modal';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private transactions = new BehaviorSubject<Transaction[]>([]);
  transactions$ = this.transactions.asObservable();

  private role = new BehaviorSubject<'admin' | 'viewer'>('viewer');
  role$ = this.role.asObservable();

  private sidebarOpen = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpen.asObservable();
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.darkMode.next(true);
      document.body.classList.add('dark');
    }
  }

  toggleDarkMode() {
    const newValue = !this.darkMode.value;
    this.darkMode.next(newValue);

    if (newValue) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleSidebar() {
    this.sidebarOpen.next(!this.sidebarOpen.value);
  }
  closeSidebar() {
    this.sidebarOpen.next(false);
  }

  setTransactions(data: Transaction[]) {
    this.transactions.next(data);
  }

  setRole(role: 'admin' | 'viewer') {
    this.role.next(role);
  }
}