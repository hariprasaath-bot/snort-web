import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RulefetchComponent } from './rulefetch/rulefetch.component';
import { SignupComponent } from './signup/signup.component';
<<<<<<< HEAD
import { StartSnortComponent } from './start-snort/start-snort.component';
=======
import { RulegenComponent } from './component/rulegen/rulegen.component';
import {HomeComponent} from './component/home/home.component';
>>>>>>> b70032f0b6c9ef40c08c5e3c5d42f52e4276cdf8

const routes: Routes = [
  { path: 'details', component: RulefetchComponent },
  {path: "login", component: LoginComponent},
  {path: "userreg", component: SignupComponent},
<<<<<<< HEAD
  {path :"startSnort",component : StartSnortComponent}
=======
  {path: "gen", component: RulegenComponent },
  {path: "home", component: HomeComponent},
>>>>>>> b70032f0b6c9ef40c08c5e3c5d42f52e4276cdf8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
