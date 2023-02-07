import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  email! : string ;
  username! : string ;
  password! : string ;
  userobj : User = new User();
  flag !: String;

  constructor(private route: ActivatedRoute,private router: Router,private userservice: UserService){
    
  }

regis(){
  this.userobj.username = this.username;
  this.userobj.email = this.email;
  this.userobj.password = this.password;
  this.save()
}

save() {  
  console.log(this.userservice.userReg(this.userobj)  
    .subscribe(resp => {
      console.log(resp);
      if (resp == "success"){  
        this.gotologin()
        this.flag = resp;
      }else{
        this.router.navigate(['/userreg']);
        this.flag="fail";
      }} ));
    
}
gotologin() {
  this.router.navigate(['/login']);
} 
}
