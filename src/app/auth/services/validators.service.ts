import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  formChecking(myForm: FormGroup, field: string): string{
    let msg: string = "";
    if(myForm.controls[field].errors){
      if(field == "name"){
        msg = "please write your name"
      }
  
      if(field == "phone"){
        msg = "Please write your phone using the format 1234-5678"
      }
  
      if(field == "email"){
        msg = "Please write a valid e-mail"
      }
  
      if(field == "password"){
        msg = "A valid password has at least 8 characters, it only contains letters and/or numbers "
      }  
      return msg
    }
    return msg
  }

  validateSubmit(myForm: FormGroup): string{

    let invalidFields: string[] = []
    let msg: string = "";

    if(!myForm.touched && myForm.status =="INVALID"){
      msg = "Please fill the form"
      return msg
    }
  
    if(myForm.touched && myForm.status =="INVALID"){
      if(myForm.controls.email.errors){
        invalidFields.push("e-mail")
      }
      if(myForm.controls.phone?.errors){
        invalidFields.push("phone")
      }
      if(myForm.controls.password.errors){
        invalidFields.push("password")
      }
      if(myForm.controls.name?.errors){
        invalidFields.push("name")
      }
      
      return "Please fill the form correctly. Wrong fields: " + invalidFields.join(", ")
    }

    return "";
  }
}





