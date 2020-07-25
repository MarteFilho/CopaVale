import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Security } from '../utils/security.util';

@Injectable()
export class AuthAdminService implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const user = Security.getUser();
    if (user.role !== 'admin') {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
