import { Component, OnInit } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { PieInterface } from '../../interfaces/pieInterface';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{
  data: any;
  myChart!: PieInterface;

  constructor(private pieService: PieService) { }

    ngOnInit() {
      this.pieService.data$.subscribe(resp =>{
        this.myChart = resp
        this.createChart()
      })

    }
    


  createChart(){
    this.data = {
      labels: this.myChart.labels.values,
      datasets: [this.myChart.dataSet]
      
      /*
      {
        data: [1, 2],
        backgroundColor: ["#456245","#aaaaaa" ]
      }
       */
      
  };
  this.gridColors()

  }


  gridColors() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: this.myChart.color
                  }
              }
          }
      }
  }


}
