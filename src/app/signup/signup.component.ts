import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['/src/assets/styles/geral.css'],
})
export class SignupComponent implements OnInit {
  public form: FormGroup;
  public busy: boolean;
  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      name: [
        '',

        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],

      nickname: [
        '',

        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],

      faceiturl: [
        '',
        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],

      email: [
        '',

        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],

      phone: [
        '',

        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],

      password: [
        '',
        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],

      function: [
        '',
        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit(): void {}

  submit() {
    this.busy = true;
    this.service.signup(this.form.value).subscribe(
      (data: any) => {
        console.log(data);
        this.busy = false;
      },
      (err) => {
        console.log(err);
        this.busy = false;
        this.toastr.error(err.error.erro, '', {
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}
