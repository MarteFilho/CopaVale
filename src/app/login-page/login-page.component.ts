import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Security } from '../utils/security.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['/src/assets/styles/geral.css']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public busy: boolean;

  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private router: Router
    ) { 
      this.form = this.fb.group({


        nickname: ['', Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required
        ])],
        

        password: ['', Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required
        ])],


      })
    }

  ngOnInit(): void {
  }


  submit(){
    this.busy = true;
    this.service.login(this.form.value)
    .subscribe(
      (data: any) => {
        localStorage.setItem('user.token', data.token);
        console.log(data);
        this.busy = false;
        this.setUser(data.user, data.token);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  setUser(user, token){
    Security.set(user, token);
    this.router.navigate(['/home']);
  }

}
