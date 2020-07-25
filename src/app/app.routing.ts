import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartidasLiveComponent } from './partidas-live/partidas-live.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './services/auth.service';
import { MymatchesComponent } from './mymatches/mymatches.component';
import { MatchesbyteamsComponent } from './matchesbyteams/matchesbyteams.component';
import { AuthAdminService } from './services/authdamin.service';

const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthService] },
  { path: 'home', component: DashboardComponent, canActivate: [AuthService] },
  {
    path: 'mymatches',
    component: MymatchesComponent,
    canActivate: [AuthService],
  },
  {
    path: 'live',
    component: PartidasLiveComponent,
    canActivate: [AuthService],
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'matchesbyteam',
    component: MatchesbyteamsComponent,
    canActivate: [AuthAdminService],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'ticket', component: TicketsComponent, canActivate: [AuthService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthService] },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
