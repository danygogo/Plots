import { Component, OnDestroy, OnInit } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { PieInterface } from '../../interfaces/pieInterface';
import { Subscription } from 'rxjs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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
  addTable: boolean= false
  percentages: number[] = []


  constructor(private pieService: PieService) { }

  ngOnInit() {
    this.myPieSubscription = this.pieService.data$.subscribe(resp =>{
      this.myChart = resp
      this.percentages = []
      this.createChart()
      this.percentagesCalculation()
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
  showTable(){
    this.addTable==true? this.addTable=false : this.addTable=true;    
  }

  percentagesCalculation(){
    if(this.myChart){

      let dataSum: number = 0

      //to calculate de sum
      this.myChart.dataSet.data.forEach( element =>{
        dataSum = dataSum + element
      })

      this.myChart.dataSet.data.forEach( (element) =>{
        let newValue = ( (element/dataSum) *100);
        this.percentages.push(newValue)
      })
    }

  }
  

  //PDF 
  public openPDF():void {  //https://rawgit.com/MrRio/jsPDF/master/docs/module-addImage.html#~addImage
    let report = document.getElementById('reportContainer')!;
        
      html2canvas(report).then(canvas => {
          
          let fileWidth = 208;
          let fileHeight = canvas.height * fileWidth / canvas.width;
          let position = 0;
          
          const FILEURI = canvas.toDataURL('image/png')
          let PDF = new jsPDF('p', 'mm', 'a4');
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
          
          PDF.save('piechart.pdf');
      });     
    }

}