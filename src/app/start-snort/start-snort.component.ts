import { Component, OnInit } from '@angular/core';
import { AlertModel } from '../model/alert-model';
import { snortStartModel } from '../model/snort-start-model';
import { StartsnortService } from '../services/startsnort.service';

@Component({
  selector: 'app-start-snort',
  templateUrl: './start-snort.component.html',
  styleUrls: ['./start-snort.component.css']
})
// 
export class StartSnortComponent implements OnInit{
    public startModel = new snortStartModel("IDS","Alert To Web","lo");
    Modes = ["IDS","Sniffing","Logging"];
    infaces:string[]=[];
    alertmodels !: AlertModel[];
    searchterm !: string;
    private searchquery = {};

constructor(private startsnortservice: StartsnortService, ){}

ngOnInit()
{
  this.startsnortservice.getInterface().subscribe((data) =>{this.infaces=data;console.log(this.infaces);});
}

onSubmit() {
  this.searchquery = { search: this.searchterm };
  console.log(this.searchquery);
  this.search();
}
search(){
  this.startsnortservice.showAlerts(this.searchterm).subscribe((data)=>{
    this.alertmodels = data;
    console.log("hello"+data);
    console.log("data from server is "+data)})
}

startSnort()
{
  console.log(this.startModel);
  this.startsnortservice.getAlerts(this.startModel).subscribe((data)=>{
    console.log("data from server is "+data)})
}

}
