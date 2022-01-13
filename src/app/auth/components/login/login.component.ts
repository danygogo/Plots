import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { userInterface } from '../../interfaces/userInterface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  myForm: FormGroup = this.fb.group({
    email: ["jdoe@test.com", [Validators.required, Validators.email]],
    password: [ "abcd1234", [Validators.required, Validators.minLength(8)]]
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

  checkForm(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

}
