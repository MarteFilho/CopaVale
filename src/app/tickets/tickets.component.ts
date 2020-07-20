import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Security } from '../utils/security.util';
import { ToastrService } from 'ngx-toastr';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['/src/assets/styles/geral.css'],
})
export class TicketsComponent implements OnInit {
  tickets: [];
  public form: FormGroup;
  public user: any;
  public busy: boolean;

  constructor(
    private data: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = this.fb.group({
      Problem: [
        '',
        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],

      Reason: [
        '',
        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],

      userId: ['', Validators.compose([Validators.minLength[1]])],
    });
  }

  ngOnInit(): void {
    this.user = Security.getUser();
    this.data.tickets().subscribe(
      (data: any) => {
        this.tickets = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public submit() {
    this.busy = true;
    var userId = this.user.userId;
    userId = parseInt(userId);

    this.data
      .newTicket({ ...this.form.value, userId: JSON.parse(userId) })
      .subscribe(
        (data: any) => {
          this.toastr.success(data.mesangem, '', {
            positionClass: 'toast-top-center',
          });
          this.router.navigate(['/ticket']);
        },
        (err) => {
          //     console.log(err);
          //     console.log(this.form.value);
          this.toastr.error(err.error.erro, '', {
            positionClass: 'toast-top-center',
          });
          //}
          // );
        }
      );
  }
}
