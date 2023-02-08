import { Component, OnInit } from '@angular/core';
import { SnortStartModel } from '../model/snort-start-model';
import { StartsnortService } from '../services/startsnort.service';

@Component({
  selector: 'app-start-snort',
  templateUrl: './start-snort.component.html',
  styleUrls: ['./start-snort.component.css']
})
// implements OnInit
export class StartSnortComponent{
  public startModel = new SnortStartModel("IDS","Alert To Web","lo");
Modes = ["IDS","Sniffing","Logging"];
infaces:string[]=["hello","hello","hello"];





constructor(private startsnortservice: StartsnortService){}

// ngOnInit()
// {
//   this.startsnortservice.getInterface().subscribe((data) =>{this.infaces=data;console.log(this.infaces);});
// }
startSnort()
{
  this.startsnortservice.getAlerts(this.startModel).subscribe((data)=>{console.log("data from server is "+data)})
}
}
