import { Component, OnInit } from '@angular/core';
import { TransactionService } from './core/services/transaction.service';
import { StateService } from './core/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private transactionService: TransactionService,
    private state: StateService
  ) {}

  ngOnInit() {
    const data = this.transactionService.getTransactions();
    this.state.setTransactions(data);
  }
}
