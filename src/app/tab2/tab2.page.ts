import { Component } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public columnChart1: GoogleChartInterface;
  public columnChart2: GoogleChartInterface;
  public barChart: GoogleChartInterface;
  public barChart2: GoogleChartInterface;
  constructor() {}

  ionViewDidEnter() {
    this.loadColumnChart();
    this.loadColumn2Chart();
    this.loadSimplePieChart();
    this.loadSimplePieChart2();
  }

  loadColumnChart() {
    this.columnChart1 = {
      chartType: 'ColumnChart',
      dataTable: [
        ['City', '2010 Population'],
        ['New York City, NY', 8175000],
        ['Los Angeles, CA', 3792000],
        ['Chicago, IL', 2695000],
        ['Houston, TX', 2099000],
        ['Philadelphia, PA', 1526000]
      ],
      options: {
        title: 'Population of Largest U.S. Cities',
        height: 600,
        chartArea: { height: '400' },
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
      },
    };
  }

  loadSimplePieChart() {
    this.columnChart2 = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      options: {
        'title' : 'Tasks',
        height: 600,
        width: '100%'
      },
    };
  }

  loadSimplePieChart2() {
    this.barChart = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      options: {
        title: 'My Daily Activities',
        height: 600,
        width: '100%',
        pieHole: 0.4
      },
    };
  }

  loadColumn2Chart() {
    this.barChart2 = {
      chartType: 'BarChart',
      dataTable: [
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
          'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 16, 22, 23, 30, 16, 9, ''],
        ['2030', 28, 19, 29, 30, 12, 13, '']
      ],
      options: {
        title: 'Population of Largest U.S. Cities',
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
      },
    };
  }

}
