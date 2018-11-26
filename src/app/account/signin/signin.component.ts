import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';
import {CustomValidators} from 'ng2-validation';

import {LoginService} from '../../shared/services/login.service';

enum CodeResponse {
  CHECK_EMAIL = 30,
  NOT_FOUND = 25
}

interface LoginResponse {
  status: number;
  code: CodeResponse;
  message: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public form: FormGroup;
  public config: any;
  public username: any;
  public password: any;


  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router, public snackBar: MatSnackBar) {
    if (loginService.isLoggedIn()) {
      this.router.navigate(['/social']);
    }
    this.config = new MatSnackBarConfig();
    this.config.verticalPosition = this.verticalPosition;
    this.config.horizontalPosition = this.horizontalPosition;
    this.config.duration = 5000;

  }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required, CustomValidators.username])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    const postData = {
      account: this.form.value.username,
      password: this.form.value.password
    };

    console.log('login postData :: ', JSON.stringify(postData));
    this.loginService.Login(postData).subscribe(data => {

        if (data.token !== undefined || data.token != null) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));

          console.log('user login :: ', localStorage.getItem('user') );
          this.snackBar.open(`welcome home ${data.user['displayName']}`, '', this.config);
          this.router.navigate(['/social']);
        }
      },
      error => {
        console.log(`Error logging in :: ${JSON.stringify(error)}`);
        this.snackBar.open(`${JSON.stringify(error.message)}`, '', this.config);
        this.form.reset();
      }
    );

  }

}
