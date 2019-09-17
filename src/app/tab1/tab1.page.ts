import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, private storage: Storage) {
  }

  ionViewDidEnter() {
    this.plotSimpleBarChart();
    this.plotSimpleBarChart2();
    this.plotSimpleBarChart3();
    this.plotSimpleBarChart4();
  }

  plotSimpleBarChart() {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45
        }
      },
      title: {
        text: 'Grafica'
      },
      subtitle: {
        text: '1'
      },
      plotOptions: {
        pie: {
          innerSize: 50,
          depth: 45
        },
        series: {
          cursor: 'pointer',
          point: {
            events: {
              click: this.funhehe.bind(this),
            }
          }
        }
      },
      series: [{
        name: 'Total',
        type: undefined,
        data: [
          ['Bananas', 8],
          ['Kiwi', 3],
          ['Mixed nuts', 1],
          ['Oranges', 6],
          ['Apples', 8],
          ['Pears', 4],
          ['Clementines', 4],
          ['Reddish (bag)', 1],
          ['Grapes (bunch)', 1]
        ]
      }]
    });
  }

  funhehe(event){
    console.log(event.point.name);
  }

  plotSimpleBarChart2() {
    let myChart2 = HighCharts.chart('highcharts2', {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: 'Grafica'
      },
      subtitle: {
        text: '2'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        },
        series: {
          cursor: 'pointer',
          point: {
            events: {
              click: this.funhehe2.bind(this),
            }
          }
        }
      },
      series: [{
        name: 'Total',
        type: undefined,
        data: [
          ['Firefox', 45.0],
          ['IE', 26.8],
          {
            name: 'Chrome',
            y: 12.8,
            sliced: true,
            selected: true
          },
          ['Safari', 8.5],
          ['Opera', 6.2],
          ['Others', 0.7]
        ]
      }]
    });
  }

  funhehe2(event){
    console.log(event.point.name);
  }

  plotSimpleBarChart3() {
    let myChart3 = HighCharts.chart('highcharts3', {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70
        }
      },
      title: {
        text: 'Grafica'
      },
      subtitle: {
        text: '3'
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      series: [{
        name: 'Total',
        type: undefined,
        data: [2, 3, 9, 4, 6, 5, 1, 4, 6, 3]
      }]
    });
  }

  funhehe3(event) {
    console.log(event.point.name);
  }

  plotSimpleBarChart4() {
    let myChart4 = HighCharts.chart('highcharts4', {
      chart: {
        type: 'bar'
      },
      title: {
          text: 'Grafica'
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          cursor: 'pointer',
          point: {
            events: {
              click: this.funhehe4.bind(this),
            }
          }
        },
      },
      series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2],
        type: undefined
      }, {
        name: 'Jane',
        type: undefined,
        data: [2, 2, 3, 2, 1]
      }, {
        name: 'Joe',
        type: undefined,
        data: [3, 4, 4, 2, 5]
      }]
    });
  }

  funhehe4(event) {
    console.log(event.point.name);
  }

  logout() {
    this.storage.set('active', 0);
    this.router.navigate(['/login/']);
  }

}
