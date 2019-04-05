import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AppComponent } from './app.component';
import { AmountComponent } from './components/amount/amount.component';
import { UserComponent } from './components/user/user.component';
import { CreditRegisterComponent } from './pages/credit-register/credit-register.component';
import { HomeComponent } from './pages/home/home.component';
import { CreditListComponent } from './pages/credit-list/credit-list.component';
import { ItemListComponent } from './components/item-list/item-list.component';

import { environment } from 'src/environments/environment';
import { CreditHistoryComponent } from './components/credit-history/credit-history.component';
import { FilterFor } from './shared/pipes/filterFor';
import { BaseAmountComponent } from './components/base-amount/base-amount.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    AmountComponent,
    UserComponent,
    CreditRegisterComponent,
    HomeComponent,
    CreditListComponent,
    ItemListComponent,
    CreditHistoryComponent,
    FilterFor,
    BaseAmountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AppRoutingModule,
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    LoadingBarHttpClientModule
  ],
  providers: [AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
