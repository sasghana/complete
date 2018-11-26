import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition,
  MatSnackBar
} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ClaimsformModel } from '../claimsform.model';
import { ClaimsformService } from '../claimsform.service';

export interface Person {
  name: string;
}
export interface DemoColor {
  name: string;
  color: string;
}

@Component({
  selector: 'app-claimsform',
  templateUrl: './claimsform-user.component.html',
  styleUrls: ['./claimsform-user.component.scss'],
})
export class ClaimsformComponent implements OnInit {

  rows = [];

  temp = [];

  columns = [
    { prop: 'id' },
    { name: 'title' },
    { name: 'status' },
    { name: 'priority' },
    { name: 'assignee' },
    { name: 'description' },
    { name: 'department' },
    { name: 'ticket' },
    { name: 'date' }
  ];

  status = [
    { value: null, viewValue: 'None' },
    { value: 'open', viewValue: 'Open' },
    { value: 'pending', viewValue: 'Pending' },
    { value: 'complete', viewValue: 'Complete' }
  ];

  priority = [
    { value: 'name', viewValue: 'Name' },
    { value: 'supplier', viewValue: 'Supplier' }
  ];

  department = [
    { value: null, viewValue: 'None' },
    { value: 'IT', viewValue: 'Information Technology' },
    { value: 'HR', viewValue: 'Human Resource' },
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'SASIM', viewValue: 'SAS Investment' },
    { value: 'Research', viewValue: 'SAS Research' }
  ];

  assignto = [
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'Ayisi Addo', viewValue: 'Ayisi Addo' },
    { value: 'Hanson Peprah', viewValue: 'Hanson' },
    { value: 'Demo', viewValue: 'Demo' },
    { value: 'Boahemaa Frimpong', viewValue: 'Boahemaa Frimpong' },
    { value: 'Tracy Topez', viewValue: 'Tracy Topez' },
    { value: 'Gordon Ahordoh', viewValue: 'Gordon Ahordoh' },
    { value: 'Wasila', viewValue: 'Wasila Yeboah' },
    { value: 'George', viewValue: 'George Bampoh' },
  ];
  username: string;
  public form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  config;

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private claimsformService: ClaimsformService,
    public snackBar: MatSnackBar, private router: Router) {
    this.fetch((data) => {
      // cache our list
      this.temp = [...data];
      // push our inital complete list
      this.rows = data;
    });
    this.username = localStorage.getItem('username');
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      reportedby: [null, Validators.compose([Validators.required])],
      status: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      assignto: [null, Validators.compose([Validators.required])],
      areasAffected: [null, Validators.compose([Validators.required])],
      department: [null, Validators.compose([Validators.required])],
      priority: [null, Validators.compose([Validators.required])],
    });
  }

 // Issue tracker
 onPostIssue() {
  const issueData = {
    reportedby: this.username,
    title: this.form.value.title,
    description: this.form.value.description,
    status: this.form.value.status,
    assignto: this.form.value.assignto,
    areasAffected: this.form.value.areasAffected,
    department: this.form.value.department,
    priority: this.form.value.priority
  };
  console.log('formgroup: post issue', issueData);

  this.claimsformService.postIssue(issueData).subscribe(data => {
    console.log(data);
    this.snackBar.open('welcome home', '', this.config);
    this.router.navigate(['/issuetracker']);
  }, (err) => {
    console.log(err);
    console.log(`error posting issue :: ${JSON.stringify(err)}`);
    this.snackBar.open(`${JSON.stringify(err.message)}`, '', this.config);
    this.form.reset();
  });
}

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/issuetracker.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
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
