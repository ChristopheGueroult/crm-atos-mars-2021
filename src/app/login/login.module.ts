import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { PagePasswordForgotComponent } from './pages/page-password-forgot/page-password-forgot.component';
import { PagePasswordResetComponent } from './pages/page-password-reset/page-password-reset.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PagePasswordResetComponent,
    PagePasswordForgotComponent,
  ],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
