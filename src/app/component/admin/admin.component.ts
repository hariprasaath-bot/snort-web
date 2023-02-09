import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
    email !: string;
    username !: string;
    users !: User[];
    searchterm !: string;
    searchquery !: {};

    constructor (private userservice : UserService ){}

    onSubmit() {
      this.searchquery = { search: this.searchterm };
      console.log(this.searchquery);
      this.getData();
    }
    findAll(){
      this.userservice.userFindAll().subscribe(data => {
        this.users = data;
      })
    }
    getData() {
      this.userservice.userFetch(this.searchterm).subscribe((data) => {
        this.users = data;
        // this.ruleobjs = data.map((x: any) => Object.assign(new Rule(), x));
        // this.dataSource = new MatTableDataSource<Rule>(this.ruleobjs);
        console.log(this.users);
      });
    }
}
