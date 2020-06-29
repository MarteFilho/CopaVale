import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartidasLiveComponent } from './partidas-live/partidas-live.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModuleWithProviders } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'live', component: PartidasLiveComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
