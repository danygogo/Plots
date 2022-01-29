import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { BarInterface, DataSet } from '../../interfaces/bar-interface';
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
  invalidData: boolean = false;
  invalidTable: boolean = false;


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
    title: [""],
    pointsQuantity: [, [Validators.required, Validators.min(1)]],
    dataSetName: [, [Validators.required]],

    //arrays
    xValues: this.fb.array([["", Validators.required],], Validators.required),
    yValues: this.fb.array([["", Validators.required],], Validators.required),
    

    //single values
    dataSetColor: ["#1C49EB", Validators.required],
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



 
  

  addDataAndStyles(){
    if( this.myForm.controls.pointsQuantity.valid && this.myForm.controls.dataSetName.valid ){
      this.valuesSelected = true;
      this.pointsQuantity = this.myForm.controls.pointsQuantity.value;

    }else{
      this.invalidData = true;
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
      this.invalidTable = false;

      const dataSet: DataSet = {
        label: this.myForm.controls.dataSetName.value,
        backgroundColor: this.myForm.controls.dataSetColor.value,
        data: this.myForm.controls.yValues.value,
      }

      const myChart: BarInterface = 
      {
        title: this.myForm.controls.title.value,
        xValues: this.myForm.controls.xValues.value,
        textdataSetColor: this.myForm.controls.textdataSetColor.value,
        labelsXColor: this.myForm.controls.labelsXColor.value,
        gridXColor: this.myForm.controls.gridXColor.value,
        labelsYColor: this.myForm.controls.labelsYColor.value,
        gridYColor: this.myForm.controls.gridYColor.value,
        dataSet: dataSet
      }

      this.newChart.emit(myChart)

    }else
    {
      if(this.myForm.controls.xValues.status == "INVALID" || this.myForm.controls.yValues.status == "INVALID"){
        this.invalidTable = true;
      }
      return
    }
  }

  deleteRow(j: number){
    if(this.yValues.length>1){
      this.yValues.removeAt(j)
      this.xValues.removeAt(j)
    }
    else{
      
      return
    }

  }

  showDialog(element: string) {
    this.element = element
    this.display = true;
  }

checkForm(field: string){
  return this.myForm.controls[field].errors && this.myForm.controls[field].touched
}

confirmInvalidTable(){
  if(this.invalidTable = true && this.myForm.controls.xValues.status == "VALID" && this.myForm.controls.yValues.status == "VALID"){
    this.invalidTable = false;
  }

}
}//End of the class



