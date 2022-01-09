import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BarInterface } from '../../interfaces/bar-interface';
import { DataSet } from '../../interfaces/bar-interface';




@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {

    @Input() myChart!: BarInterface 

    basicData: any;
    basicOptions: any;
    title: string = "";


    constructor() {}

    ngOnInit() {

        
    }//end of ngOnInit

    ngOnChanges(changes: SimpleChanges): void {
        if(this.myChart){

            this.createChart()
        }
    }


    gridColors() {
        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: this.myChart.textdataSetColor //legend labels
                    }
                }
            },
            scales: { 
                x: {
                    ticks: {
                        color: this.myChart.labelsXColor  //labelsin x axis
                    },
                    grid: {
                        color: this.myChart.gridXColor //vertical grid lines
                    }
                },
                y: {
                    ticks: {
                        color: this.myChart.labelsYColor //numbers in y axis
                    },
                    grid: {
                        color: this.myChart.gridYColor //horizontal grid lines
                    }
                }
            }
        };
      
    }//End of gridColors


    createChart(){

        if(this.myChart.title){
            this.title = this.myChart.title;
        }else{
            this.title = ""
        }
        

        this.basicData = {
            labels: this.myChart.xValues,
            datasets: [this.myChart.dataSet]
        };

        this.gridColors()
    }




}




