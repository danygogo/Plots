import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { BarInterface } from '../../interfaces/bar-interface';
import { BarService } from '../../services/bar.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-bar-form',
  templateUrl: './bar-form.component.html',
  styleUrls: ['./bar-form.component.css'],
})
export class BarFormComponent implements OnInit, OnChanges {
  
  dataSetQuantity: number = 1;
  pointsQuantity: number = 1;
  valuesSelected: boolean = false;
  display: boolean = false;
  element: string = "";

  @Output() newChart: EventEmitter<BarInterface> = new EventEmitter();



  constructor(private fb: FormBuilder,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  

  myForm: FormGroup = this.fb.group({
    //single values
    title: ["Test Chart"],
    pointsQuantity: [3, [Validators.required, Validators.min(1)]],
    dataSetName: ["women", Validators.required],

    //arrays
    xValues: this.fb.array([["", Validators.required],], Validators.required),
    yValues: this.fb.array([["", Validators.required],], Validators.required),
    

    //single values
    dataSetColor: ["#24C5E0", Validators.required],
    textdataSetColor: ["#000000", Validators.required],
    labelsXColor: ["#000000", Validators.required],
    gridXColor: ['#ebedef', Validators.required],
    labelsYColor: ["#000000", Validators.required],
    gridYColor: ['#ebedef', Validators.required],
  })



  get dataSetName() {
    return this.myForm.get('dataSetName') as FormArray;
  }

  get xValues() {
    return this.myForm.get('xValues') as FormArray;
  }

  get yValues() {
    return this.myForm.get('yValues') as FormArray;
  }



  //**************************************************METHODS**************************************************

 
  

  addDataAndStyles(){
    if( this.myForm.controls.pointsQuantity.valid && this.myForm.controls.dataSetName.valid ){
      this.valuesSelected = true;
      this.pointsQuantity = this.myForm.controls.pointsQuantity.value;

    }else{
      return
    }


    for (let i = 0; i < this.pointsQuantity -1; i++) {
      this.xValues.push(this.fb.control('', Validators.required));
    }

    for (let i = 0; i < this.pointsQuantity -1; i++) {
      this.yValues.push(this.fb.control('', Validators.required));
    }
  }


  addRow(){
    this.xValues.push(this.fb.control('', Validators.required));
    this.yValues.push(this.fb.control('', Validators.required));
  }



  setValues(){
    if(this.myForm.valid){

      const myChart: BarInterface = 
      {
        title: this.myForm.controls.title.value,
        dataSetName: this.myForm.controls.dataSetName.value,
        xValues: this.myForm.controls.xValues.value,
        yValues: this.myForm.controls.yValues.value,
        dataSetColor: this.myForm.controls.dataSetColor.value,
        textdataSetColor: this.myForm.controls.textdataSetColor.value,
        labelsXColor: this.myForm.controls.labelsXColor.value,
        gridXColor: this.myForm.controls.gridXColor.value,
        labelsYColor: this.myForm.controls.labelsYColor.value,
        gridYColor: this.myForm.controls.gridYColor.value,
      }
      
      this.newChart.emit(myChart)

    }else
    {
      return
    }
  }

  deleteRow(j: number){
    this.yValues.removeAt(j)
    this.xValues.removeAt(j)

  }

  showDialog(element: string) {
    this.element = element
    this.display = true;
    console.log(this.element)
}

  

}//End of the class



