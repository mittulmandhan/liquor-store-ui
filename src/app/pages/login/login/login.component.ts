import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(6)
      ]),
    });
  }

  ngOnInit(): void {
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  logPasswordFormControl(): void {
    console.log(this.password);
  }

  printLoginForm(): void {
    console.log(this.loginForm);
  }

}
