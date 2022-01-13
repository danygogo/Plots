import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userInterface } from '../../interfaces/userInterface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  myForm: FormGroup = this.fb.group({
    email: ["jdoe@test.com", [Validators.required, Validators.email]],
    password: [ "abcd1234", [Validators.required, Validators.minLength(8)]],
    phone: [ "8888-9999", [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]{4}-[0-9]{4}$")]],
    name: [ "User 2", [Validators.required, Validators.minLength(2)]]
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

  checkForm(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

}
