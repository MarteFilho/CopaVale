import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Security } from '../utils/security.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: User;

  constructor(public httpclient: HttpClient) { }

  ngOnInit(): void {
    this.user = Security.getUser();
  }

}
