import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginRequest } from '../model/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  readonly props = LoginRequest.properties;
  readonly propsKeys = Object.keys(this.props);

  constructor(private fb: FormBuilder) {}

  private validationMsg = {
    username: {
      min: {},
    },
  };

  ngOnInit(): void {}

  form = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(255)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(255)],
    ],
  });

  onSubmit() {}
}
