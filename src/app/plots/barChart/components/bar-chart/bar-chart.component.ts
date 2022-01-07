import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/plots/interfaces/interfaces';
import { AppConfigServiceService } from 'src/app/plots/services/app-config-service.service';




@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  basicData: any;

  basicOptions: any;

  constructor(private configService: AppConfigServiceService) {}

  ngOnInit() {
        this.basicData = {
            labels: [1, 2.5, 3, 4, 5, 6, 7],
            datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: '#42A5F5',
                  data: [20, 20, 20, 81, 56, 55, 100]
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: '#FFA726',
                  data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.gridColors()
    }


    gridColors() {
        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057' //legend labels
                    }
                }
            },
            scales: { 
                x: {
                    ticks: {
                        color: '#495057'  //labelsin x axis
                    },
                    grid: {
                        color: '#ebedef' //vertical grid lines
                    }
                },
                y: {
                    ticks: {
                        color: '#495057' //numbers in y axis
                    },
                    grid: {
                        color: '#ebedef' //horizontal grid lines
                    }
                }
            }
        };
      
    }
}


