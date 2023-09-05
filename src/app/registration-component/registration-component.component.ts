import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators}from '@angular/forms'
@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent {
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
