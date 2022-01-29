import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { userInterface } from '../../interfaces/userInterface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { MessageService } from 'primeng/api';
import { ValidatorsService } from '../../services/validators.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private messageService: MessageService,
              private vs: ValidatorsService) { }

  msg: string = "";
  invalidFields: string[] = [];

  myForm: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(8),Validators.pattern("[a-zA-Z0-9]*")]]
  })

  ngOnInit(): void {
  }

  getUser(){
    if(this.myForm.valid){
      const user: userInterface = {
        email: this.myForm.controls.email.value,
        password: this.myForm.controls.password.value
      }

      this.authService.login(user).subscribe(resp => 
          {
            if(resp === true){
              console.log("entra al if")
              this.router.navigateByUrl("/application/home");
            }else{
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

      

    }else{
      return
    }
  
  }


  readme(){
    Swal.fire(
      {
        title: "don't have an account?",
        text: "This is a demo application, you can log in with using the email jsmith@gmail.com and password Abcd1234 or you can create your own account",
        confirmButtonColor: '#DB592A'
      })

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
