import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{
  confirmPassword?:string;
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required]]
} );
  }

onRegister()
{
}

}
