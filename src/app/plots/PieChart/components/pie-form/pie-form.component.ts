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
  formValid: boolean = true
  validQuantity: boolean = true

  constructor(private fb: FormBuilder, private pieService: PieService) { }

  ngOnInit(): void {
  }

  myForm: FormGroup = this.fb.group({
    //single values
    title: [],
    pointsQuantity: [, [Validators.required, Validators.min(1)]],

    //arrays
    labels: this.fb.array([["", Validators.required],], Validators.required),
    data: this.fb.array([["", Validators.required],], [Validators.required, Validators.min(0)]),
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
        this.validQuantity = false
        return
      }
  
  
      for (let i = 0; i < this.pointsQuantity -1; i++) {
        const color = this.createColor()
        this.data.push(this.fb.control('', [Validators.required]));
        this.backgroundColor.push(this.fb.control(color, Validators.required));
        this.labels.push(this.fb.control('', Validators.required));
      }

    }
  
  
    addRow(){
      const color: string = this.createColor()
      this.data.push(this.fb.control('', [Validators.required ]));
      this.backgroundColor.push(this.fb.control(color, Validators.required));
      this.labels.push(this.fb.control('', Validators.required));
    }
  
  
  
    setValues(){
      if(this.myForm.valid){
        this.formValid = true;
  
        const dataSet: PieDataSet = {
          backgroundColor: this.myForm.controls.backgroundColor.value,
          data: this.myForm.controls.data.value
        }
  
        const myChart: PieInterface = 
        {
          title: this.myForm.controls.title.value,
          labels: this.myForm.controls.labels.value,
          dataSet: dataSet
        }
  
        this.pieService.data$.emit(myChart)
  
      }else
      {
        this.formValid = false
        return
      }
    }
  
    deleteRow(j: number){
      if(this.data.length > 1){
        this.data.removeAt(j)
        this.backgroundColor.removeAt(j)
        this.labels.removeAt(j)
      }
      else{
        return
      }
      
    }
  
    showDialog(element: string) {
      this.element = element
      this.display = true;
    }
  
    checkForm(campo: string){
      return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched
    }

    resetValid(){
      this.validQuantity = true
    }

    checkLabels(){
      return this.myForm.controls.labels.status == "INVALID" && this.myForm.controls.labels.touched
    }
    
    checkData(){
      return this.myForm.controls.data.status == "INVALID" && this.myForm.controls.data.touched
    }

    createColor(): string{
      const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
      return color;
    }

}
