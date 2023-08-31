import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { firebaseConfig } from './firebase/firebaseConfig';
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
