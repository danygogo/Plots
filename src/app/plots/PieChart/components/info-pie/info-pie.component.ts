import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-pie',
  templateUrl: './info-pie.component.html',
  styleUrls: ['./info-pie.component.css']
})
export class InfoPieComponent implements OnInit {

  @Input() element: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
