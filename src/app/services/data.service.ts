import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Security } from '../utils/security.util';
import { Iplayer } from '../models/player';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public user: User;
  public Partidas: any;

  constructor(private http: HttpClient) {}

  public getPartidasAgendadas() {
    return this.http.get<any>(
      'https://open.faceit.com/data/v4/championships/d6a6b4dc-bef5-4c62-ab71-494e6e6eef87/matches?type=upcoming&offset=0&limit=100',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer 2f52d9e7-2f15-472e-9210-ce91616d214e'
        ),
      }
    );
  }

  public getPartidasAgendadas2() {
    return this.http.get<any>(
      'https://open.faceit.com/data/v4/championships/d6a6b4dc-bef5-4c62-ab71-494e6e6eef87/matches?type=upcoming&offset=100&limit=100',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer 2f52d9e7-2f15-472e-9210-ce91616d214e'
        ),
      }
    );
  }

  public getPartidasLive() {
    return this.http.get<Iplayer>(
      'https://open.faceit.com/data/v4/championships/d6a6b4dc-bef5-4c62-ab71-494e6e6eef87/matches?type=ongoing&offset=0&limit=150',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer 2f52d9e7-2f15-472e-9210-ce91616d214e'
        ),
      }
    );
  }

  public getPlayer() {
    this.user = Security.getUser();
    return this.http.get(
      'https://open.faceit.com/data/v4/players?nickname=' + this.user.nickname,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer 2f52d9e7-2f15-472e-9210-ce91616d214e'
        ),
      }
    );
  }

  public tickets() {
    this.user = Security.getUser();

    return this.http.get(
      'https://copavale.azurewebsites.net/v1/ticket/' + this.user.userId
    );
  }

  public newTicket(data) {
    return this.http.post(
      'https://copavale.azurewebsites.net/v1/ticket/',
      data
    );
  }

  public login(data) {
    return this.http.post('https://copavale.azurewebsites.net/v1/login/', data);
  }

  public signup(data) {
    return this.http.post('https://copavale.azurewebsites.net/v1/user/', data);
  }
}
