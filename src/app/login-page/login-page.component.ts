import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Security } from '../utils/security.util';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['/src/assets/styles/geral.css'],
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy: boolean;

  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      nickname: [
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
    });
  }

  ngOnInit(): void {}

  submit() {
    this.busy = true;
    this.service.login(this.form.value).subscribe(
      (data: any) => {
        this.busy = false;
        this.setUser(data.user, data.token);
        this.toastr.success(data.mesangem, '', {
          positionClass: 'toast-top-center',
        });
      },
      (err) => {
        this.busy = false;
        this.toastr.error(err.error.erro, '', {
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/login']);
      }
    );
  }

  setUser(user, token) {
    Security.saveUser(user, token);
    this.router.navigate(['/home']);
  }
}
