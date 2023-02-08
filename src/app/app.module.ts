import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RulefetchComponent } from './rulefetch/rulefetch.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { StartSnortComponent } from './start-snort/start-snort.component';
//import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RulefetchComponent,
    SignupComponent,
    LoginComponent,
    StartSnortComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
