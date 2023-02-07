import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private userservice: UserService){

  }

  login(){
    this.userservice.userlogin({"username": this.username,"password":this.password}
    ).subscribe(data => console.log(data))
  }
}
