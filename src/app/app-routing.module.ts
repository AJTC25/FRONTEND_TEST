import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditRegisterComponent } from './pages/credit-register/credit-register.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = 
[
  { path: 'credit/register', component: CreditRegisterComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
