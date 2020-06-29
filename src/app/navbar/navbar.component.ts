import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Security } from '../utils/security.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public user: User;
  public logado: any;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.user = Security.getUser();
    this.logado = this.user;
    console.log(this.logado);
    if (this.logado === null) {
    }
  }

  logout() {
    Security.clear();
    this.router.navigate(['/login']);
  }
}
