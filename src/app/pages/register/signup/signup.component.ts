import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
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
    return this.signupForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  logPasswordFormControl(): void {
    console.log(this.password);
  }

  printsignupForm(): void {
    console.log(this.signupForm);
  }

}
