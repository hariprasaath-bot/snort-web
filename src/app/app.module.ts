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

import { HomeComponent } from './component/home/home.component';
import { RulegenComponent } from './component/rulegen/rulegen.component';

import { Rule } from './model/rule';
import { MatTableModule } from '@angular/material/table';

//import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RulefetchComponent,
    SignupComponent,
    LoginComponent,
    StartSnortComponent,
    HomeComponent,
    RulegenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [Rule],
  bootstrap: [AppComponent]
})
export class AppModule { }
