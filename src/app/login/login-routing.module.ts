import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePasswordForgotComponent } from './pages/page-password-forgot/page-password-forgot.component';
import { PagePasswordResetComponent } from './pages/page-password-reset/page-password-reset.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: 'signin', component: PageSignInComponent },
  { path: 'signup', component: PageSignUpComponent },
  { path: 'reset', component: PagePasswordResetComponent },
  { path: 'forgot', component: PagePasswordForgotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
