import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userInterface } from '../../interfaces/userInterface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { MessageService } from 'primeng/api';
import { ValidatorsService } from '../../services/validators.service';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private fb: FormBuilder, 
              private authService: AuthService, 
              private router: Router, 
              private messageService: MessageService,
              private vs: ValidatorsService
              ) { }

  ngOnInit(): void {
  }

  msg: string = "";
  invalidFields: string[] = [];

  myForm: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(8)]],
    phone: [, [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]{4}-[0-9]{4}$")]],
    name: [, [Validators.required, Validators.minLength(2)]]
  })


  getUser(){

    if(this.myForm.valid){
      const user: userInterface = {
        email: this.myForm.controls.email.value,
        password: this.myForm.controls.password.value,
        name: this.myForm.controls.name.value,
        phone: this.myForm.controls.phone.value,
      }
      this.authService.createUser(this.myForm.value).subscribe(
        resp => {
          if(resp === true){
            this.router.navigateByUrl("/application/home");
          }else{
            console.log(resp)
            Swal.fire(
              {
                title: 'Invalid user',
                text: resp,
                icon: 'error',
                confirmButtonColor: '#DB592A'
              })
          }
        }
      )

    }
      
  }


  formChecking(field: string){
    this.msg = this.vs.formChecking(this.myForm, field)
    if(this.msg.length > 2){
      this.showMsg()
    }
  }

  validateSubmit(){
    this.msg = this.vs.validateSubmit(this.myForm)
    if(this.msg.length > 2){
      this.showMsg()
    }
  }

  showMsg() {
    this.messageService.add({key: 'tc', severity:'error',  detail: this.msg});
  }


  
}
