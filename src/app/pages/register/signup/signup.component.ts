import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  constructor(private fb: FormBuilder, private router: Router) {
    const currDate = new Date();
    this.minDate = new Date(currDate.getFullYear() - 100, currDate.getMonth(), currDate.getDay());
    this.maxDate = new Date(currDate.getFullYear() - 25, currDate.getMonth(), currDate.getDay());
    this.signupForm = this.fb.group({
      firstName: this.fb.control(null, [
        Validators.required
      ]),
      lastName: this.fb.control(null, [
        Validators.required
      ]),
      DOB: this.fb.control(null, [
        Validators.required
      ]),
      phone: this.fb.control(null, [
        Validators.required
      ])
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

  printSignupForm(): void {
    console.log(this.signupForm);
    this.router.navigate(['/confirm-otp']);
  }

}
