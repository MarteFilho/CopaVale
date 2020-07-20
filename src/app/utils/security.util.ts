import { User } from '../models/user.model';

export class Security {
  public static saveUser(user: User, token: string) {
    const data = JSON.stringify(user);

    localStorage.setItem('copauser', data);
    localStorage.setItem('copatoken', token);
  }

  public static getUser() {
    const data = localStorage.getItem('copauser');
    if (data) {
      return JSON.parse(data);
    } else return null;
  }

  public static clear() {
    localStorage.removeItem('copauser');
    localStorage.removeItem('copatoken');
    localStorage.removeItem('user.token');
  }

  public static getToken(): string {
    const data = localStorage.getItem('copatoken');
    if (data) {
      return data;
    } else {
      return null;
    }
  }
}
