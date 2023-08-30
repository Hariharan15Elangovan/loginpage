import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators}from '@angular/forms'
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  ValidationForm!:FormGroup;
  constructor(){
   this.ValidationForm=new FormGroup({
    email:new FormControl('admin@gmail.com',[Validators.required,Validators.email]),
    password:new FormControl('admin1234',[Validators.required, Validators.minLength(8)])
   });
  }

  submit(){
    console.log(this.ValidationForm.get('email')?.value);
  }
}
