import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public teste: any;

  constructor(private http: HttpClient) {}

  public getPartidasAgendadas() {
    return this.http.get(
      'https://open.faceit.com/data/v4/championships/5592209b-5bdf-4f05-96da-c71be8917a47/matches?type=upcoming&offset=0&limit=100',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer 2f52d9e7-2f15-472e-9210-ce91616d214e'
        ),
      }
    );
  }

  public getPartidasLive() {
    return this.http.get(
      'https://open.faceit.com/data/v4/championships/5592209b-5bdf-4f05-96da-c71be8917a47/matches?type=ongoing&offset=0&limit=100',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer 2f52d9e7-2f15-472e-9210-ce91616d214e'
        ),
      }
    );
  }

  public login(data) {
    return this.http.post('https://copavale.azurewebsites.net/v1/login', data);
  }

  public signup(data) {
    return this.http.post('https://copavale.azurewebsites.net/v1/user', data);
  }
}
