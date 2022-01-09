import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BarInterface } from '../interfaces/bar-interface';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  myChart!: BarInterface;


  constructor() { }


  receiveData(myChart: BarInterface){
    this.myChart = myChart;
  }


  sendData = new Observable<BarInterface>((observer) => {
    observer.next(this.myChart)
  })

  
}
