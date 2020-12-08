import { Component, OnInit } from '@angular/core';
import {DvdService} from "../../shared/dvd.service";

@Component({
  selector: 'app-list-dvd',
  templateUrl: './list-dvd.component.html',
  styleUrls: ['./list-dvd.component.css']
})
export class ListDvdComponent implements OnInit {
  dvds;
  searchValue: string;
  p:number=1;
  constructor(private dvdService: DvdService) { }

  ngOnInit(): void {
    this.dvdService.getAllDvds().subscribe((data)=>{
      this.dvds=data;console.log(this.dvds)

    }),
      errors =>{
        console.log(errors);
      }
  }
  key: string ='id';
  reverse:boolean = false;
  sort(key){
    this.key=key;
    this.reverse =!this.reverse;

  }


}
