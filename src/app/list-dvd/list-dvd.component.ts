import {Component, Input, OnInit} from '@angular/core';
import {DvdService} from "../../shared/dvd.service";
import {Dvd} from "../../models/Dvd";


@Component({
  selector: 'app-list-dvd',
  templateUrl: './list-dvd.component.html',
  styleUrls: ['./list-dvd.component.css']
})
export class ListDvdComponent implements OnInit {
  @Input() dvd
  @Input() index;


  dvds;
  searchValue: string;
  title;
  p:number=1;

  constructor(public dvdService: DvdService) { }

  ngOnInit(): void {
    this.dvdService.getAllDvds().subscribe((data)=>{
      this.dvds=data;console.log(this.dvds)}),
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

  searchTitle(): void {
    this.dvdService.findByTitle(this.title)
      .subscribe(
        data => {
          this.dvds = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
