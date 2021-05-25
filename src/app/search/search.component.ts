import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  service:any;
  getServices: any;
   userName : string = ''
  constructor(private findServices:ServicesService) { 
    
  }
  userSubmit(){
    console.log(this.userName);
    this.findServices.getServiceData(this.userName).subscribe((service: any) =>{
      console.log(service);
      this.service = service;
    });
  }
  ngOnInit() {
  }

}
