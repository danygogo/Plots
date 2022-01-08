import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarInterface } from '../../interfaces/bar-interface';


@Component({
  selector: 'app-bar-form',
  templateUrl: './bar-form.component.html',
  styleUrls: ['./bar-form.component.css']
})
export class BarFormComponent implements OnInit, OnChanges {
  
  dataSetQuantity: number = 1;
  pointsQuantity: number = 1;
  valuesSelected: boolean = false;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log("OnInit")
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    console.log("OnChanges")
  }

  

  myForm: FormGroup = this.fb.group({
    //single values
    title: [, Validators.required],
    pointsQuantity: [, [Validators.required, Validators.min(1)]],
    dataSetName: [, Validators.required],

    //arrays
    xValues: this.fb.array([["", Validators.required],], Validators.required),
    yValues: this.fb.array([["", Validators.required],], Validators.required),
    

    //single values
    dataSetColor: ["#E07B28"],
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
    if( this.myForm.controls.pointsQuantity.valid ){
      this.valuesSelected = true;
      this.pointsQuantity = this.myForm.controls.pointsQuantity.value;

    }else{
      return
    }


    for (let i = 0; i < this.pointsQuantity -1; i++) {
      this.xValues.push(this.fb.control(''));
    }

    for (let i = 0; i < this.pointsQuantity -1; i++) {
      this.yValues.push(this.fb.control(''));
    }
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
      console.log(myChart)
    }else
    {
      return
    }
  }


  
 
  

}//End of the class



/* 
  
 */