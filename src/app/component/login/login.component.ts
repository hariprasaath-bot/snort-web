import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;

  loginstatus!: string;

  constructor(private router: Router,private userservice: UserService){

  }

  login(){
    this.userservice.userlogin({"username": this.username,"password":this.password}
    ).subscribe((response) => {                       
      console.log('response received');
      this.loginstatus = response;
      if(this.loginstatus == "success"){
          this.gotoHome();
      }else{
          this.gotoRegis();
      }
    })
  }

  gotoHome(){
    this.router.navigate(['/startSnort',]);
  }
  
  gotoRegis(){
    this.router.navigate(['/userreg'])
  }
}
