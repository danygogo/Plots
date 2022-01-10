import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PieDataSet, PieInterface } from '../../interfaces/pieInterface';
import { PieService } from '../../services/pie.service';

@Component({
  selector: 'app-pie-form',
  templateUrl: './pie-form.component.html',
  styleUrls: ['./pie-form.component.css']
})
export class PieFormComponent implements OnInit {

  pointsQuantity: number = 1;
  valuesSelected: boolean = false;
  display: boolean = false;
  element: string = "";

  constructor(private fb: FormBuilder, private pieService: PieService) { }

  ngOnInit(): void {
  }

  myForm: FormGroup = this.fb.group({
    //single values
    title: ["Test Chart"],
    pointsQuantity: [1, [Validators.required, Validators.min(1)]],
    color: ['#ebedef', Validators.required],


    //arrays
    labels: this.fb.array([["", Validators.required],], Validators.required),
    data: this.fb.array([["", Validators.required],], Validators.required),
    backgroundColor: this.fb.array([["#24C5E0", Validators.required],], Validators.required),
    
  })

  get data() {
    return this.myForm.get('data') as FormArray;
  }

  get backgroundColor() {
    return this.myForm.get('backgroundColor') as FormArray;
  }

  get labels() {
    return this.myForm.get('labels') as FormArray;
  }


    //**************************************************METHODS**************************************************

 
  

    addDataAndStyles(){
      if( this.myForm.controls.pointsQuantity.valid){
        this.valuesSelected = true;
        this.pointsQuantity = this.myForm.controls.pointsQuantity.value;
  
      }else{
        return
      }
  
  
      for (let i = 0; i < this.pointsQuantity -1; i++) {
        this.data.push(this.fb.control('', Validators.required));
        this.backgroundColor.push(this.fb.control('#E07B28', Validators.required));
        this.labels.push(this.fb.control('', Validators.required));
      }

    }
  
  
    addRow(){
      this.data.push(this.fb.control('', Validators.required));
      this.backgroundColor.push(this.fb.control('#098094', Validators.required));
      this.labels.push(this.fb.control('', Validators.required));
    }
  
  
  
    setValues(){
      if(this.myForm.valid){
  
        const dataSet: PieDataSet = {
          backgroundColor: this.myForm.controls.backgroundColor.value,
          data: this.myForm.controls.data.value
        }
  
        const myChart: PieInterface = 
        {
          title: this.myForm.controls.title.value,
          labels: this.myForm.controls.labels.value,
          color: this.myForm.controls.color.value,
          dataSet: dataSet
        }
  
        this.pieService.data$.emit(myChart)
  
      }else
      {
        return
      }
    }
  
    deleteRow(j: number){
      this.data.removeAt(j)
      this.backgroundColor.removeAt(j)
      this.labels.removeAt(j)
    }
  
    showDialog(element: string) {
      this.element = element
      this.display = true;
    }
  


}
