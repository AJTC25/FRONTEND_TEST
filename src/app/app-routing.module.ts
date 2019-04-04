import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditRegisterComponent } from './pages/credit-register/credit-register.component';
import { HomeComponent } from './pages/home/home.component';
import { CreditListComponent } from './pages/credit-list/credit-list.component';

const routes: Routes =
  [
    { path: '', component: HomeComponent },
    { path: 'credit/register', component: CreditRegisterComponent },
    { path: 'credit/list', component: CreditListComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
