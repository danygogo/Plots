import { Component, OnInit } from '@angular/core';
import { BarInterface } from '../../interfaces/bar-interface';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.css']
})
export class BarPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myChart!: BarInterface



  addChart(myChart: BarInterface){
    this.myChart = myChart

  }

}
