import { Component, OnInit } from '@angular/core';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  topCategory = '';

  constructor(private state: StateService) {}

  ngOnInit() {
    this.state.transactions$.subscribe(data => {

      const map: any = {};

      data.forEach(t => {
        if (t.type === 'expense') {
          map[t.category] = (map[t.category] || 0) + t.amount;
        }
      });

      this.topCategory = Object.keys(map).reduce((a, b) =>
        map[a] > map[b] ? a : b, ''
      );
    });
  }
}
