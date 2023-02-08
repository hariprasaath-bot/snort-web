import { Component } from '@angular/core';
import { Rule } from '../model/rule';
import { RuleService } from '../services/rule.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rulefetch',
  templateUrl: './rulefetch.component.html',
  styleUrls: ['./rulefetch.component.css'],
})
export class RulefetchComponent {
  searchterm!: string;
  // displayedColumns: string[] = ['rule']; 
  private searchquery = {};
  ruleobjs !:Rule[];
  // dataSource = new MatTableDataSource<Rule>(this.ruleobjs);
  
  constructor(private ruleservice: RuleService) {}

  onSubmit() {
    this.searchquery = { search: this.searchterm };
    console.log(this.searchquery);
    this.save();
  }

  save() {
    this.ruleservice.fetchRule(this.searchterm).subscribe((data) => {
       console.log(data.data);
      
      this.ruleobjs = data;
      // this.ruleobjs = data.map((x: any) => Object.assign(new Rule(), x));
      // this.dataSource = new MatTableDataSource<Rule>(this.ruleobjs);
      console.log(this.ruleobjs[0]);
    });
  }
}
