import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  @ViewChild('barCanvas', {static: true}) barCanvas: ElementRef;
  @ViewChild('doughnutCanvas', {static: true}) doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas', {static: true}) lineCanvas: ElementRef;
  @ViewChild('lineCanvas2', {static: true}) lineCanvas2: ElementRef;

  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;
  private lineChart2: Chart;

  constructor() {
  }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56'],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      }
    });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      }
    });

    this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          backgroundColor: '#FF6384',
          label: 'Dataset 1',
          stack: 'Stack 0',
          data: [1, 2 , 3 , 4 , 5 , 6 , 7]
        }, {
          label: 'Dataset 2',
          backgroundColor: '#36A2EB',
          stack: 'Stack 0',
          data: [1, 2 , 3 , 4 , 5 , 6 , 7]

        }, {
          label: 'Dataset 3',
          backgroundColor: '#FFCE56',
          stack: 'Stack 0',
          data: [1, 2 , 3 , 4 , 5 , 6 , 7]

        }
        ]
      }
    });
  }

}
