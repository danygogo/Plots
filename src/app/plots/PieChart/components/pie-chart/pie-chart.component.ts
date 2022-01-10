import { Component, OnDestroy, OnInit } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { PieInterface } from '../../interfaces/pieInterface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnDestroy{
  data: any;
  myChart!: PieInterface;
  title: string = ""
  myPieSubscription!: Subscription;


  constructor(private pieService: PieService) { }

  ngOnInit() {
    this.myPieSubscription = this.pieService.data$.subscribe(resp =>{
      this.myChart = resp
      this.createChart()
    })

  }

  ngOnDestroy(): void {
      this.myPieSubscription.unsubscribe()
  }
    


  createChart(){
    this.data = {
      labels: this.myChart.labels,
      datasets: [this.myChart.dataSet]     
    }

    if(this.myChart.title){
      this.title = this.myChart.title
    }
  }

}