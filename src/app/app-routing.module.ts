import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthorizationGuard } from './services/authorization.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  // { path: 'main', component: MainComponent, canActivate: [AuthorizationGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
