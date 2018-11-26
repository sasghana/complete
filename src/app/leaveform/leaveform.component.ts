import { Component, OnInit, ViewChild } from '@angular/core';
import { LeaveformModel } from './leaveform.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import {
  MatStepper,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition,
  MatSnackBar
} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export interface Person {
  name: string;
}
export interface DemoColor {
  name: string;
  color: string;
}

@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.component.html',
  styleUrls: ['./leaveform.component.scss'],
})
export class LeaveformComponent implements OnInit {

  tabIndex = 0;
  visible = true;
  color = '';
  selectable = true;
  removable = true;
  addOnBlur = true;
  message = '';

  step = 0;

  public leaveapp;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  username: string;
  public form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  config;

  constructor(private router: ActivatedRoute,
    public formBuilder: FormBuilder, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
export class ExpansionDemoComponent {
  displayMode = 'default';
  multi = false;
  hideToggle = false;
  disabled = false;
  showPanel3 = true;
  expandedHeight: string;
  collapsedHeight: string;
}

