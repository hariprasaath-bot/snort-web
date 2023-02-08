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
<<<<<<< HEAD
    ).subscribe((response) => {                       
      console.log('response received');
=======
    ).subscribe((response: string) => {                       
      console.log('response received')
>>>>>>> b70032f0b6c9ef40c08c5e3c5d42f52e4276cdf8
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
