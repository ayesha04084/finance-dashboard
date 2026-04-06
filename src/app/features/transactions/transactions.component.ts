import { Component, OnInit,Input } from '@angular/core';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: any[] = [];
  filtered: any[] = [];
  search = '';
  role = 'viewer';

  constructor(private state: StateService) {}

  ngOnInit() {
    this.state.transactions$.subscribe(data => {
      this.transactions = data;
      this.filtered = data;
    });

    this.state.role$.subscribe(r => {
      this.role = r;
    });
  }

  searchData() {
    this.filtered = this.transactions.filter(t =>
      t.category.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}


