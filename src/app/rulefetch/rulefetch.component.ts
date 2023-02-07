import { Component } from '@angular/core';
import { RuleService } from '../services/rule.service';

@Component({
  selector: 'app-rulefetch',
  templateUrl: './rulefetch.component.html',
  styleUrls: ['./rulefetch.component.css']
})
export class RulefetchComponent {
  searchterm!: string;
  constructor(private ruleservice:RuleService){}
  
  onSubmit() {
    const searchquery = { searchterm: this.searchterm,};
    console.log(searchquery);
    this.save()
  }

   save() {  
     this.ruleservice.fetchRule(this.searchterm)  
       .subscribe(data => console.log(data));  
   }  
}
