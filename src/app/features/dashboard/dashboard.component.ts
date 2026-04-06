import { StateService } from 'src/app/core/services/state.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
totalBalance = 0;
  income = 0;
  expense = 0;

  constructor(private state: StateService) {}

  ngOnInit() {
    this.state.transactions$.subscribe(data => {

      this.income = data
        .filter(t => t.type === 'income')
        .reduce((a, b) => a + b.amount, 0);

      this.expense = data
        .filter(t => t.type === 'expense')
        .reduce((a, b) => a + b.amount, 0);

      this.totalBalance = this.income - this.expense;

      this.createCharts(data);
    });
  }

  createCharts(data: any[]) {

    // Line Chart (balance trend)
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: data.map(d => d.date),
        datasets: [{
          label: 'Balance Trend',
          data: data.map(d => d.amount),
          borderColor: '#3b82f6',
          fill: false
        }]
      }
    });

    // Pie Chart (category breakdown)
    const categories: any = {};

    data.forEach(d => {
      if (d.type === 'expense') {
        categories[d.category] = (categories[d.category] || 0) + d.amount;
      }
    });

    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: Object.keys(categories),
        datasets: [{
          data: Object.values(categories)
        }]
      }
    });
  }
}
