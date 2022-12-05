import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginRequest } from '../model/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  readonly props = LoginRequest.properties;
  readonly propsKeys = Object.keys(this.props);
  errMsg?: string;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  form = this.fb.group({
    username: [
      '',
      [Validators.required,
      Validators.minLength(this.props.username.minlength.value),
      Validators.maxLength(this.props.username.maxlength.value)],
    ],
    password: [
      '',
      [Validators.required,
      Validators.minLength(this.props.password.minlength.value),
      Validators.maxLength(this.props.password.maxlength.value)],
    ],
  });

  onSubmit() {
    this.loginService.logIn(this.form.value as LoginRequest)
      .subscribe(
        {
          next: data => { this.router.navigate(["/"]) },
          error: err => { console.log(err), this.errMsg = err.error }
        }
      );
  }
}
