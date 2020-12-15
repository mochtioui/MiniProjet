import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DvdService} from "../../shared/dvd.service";
import {Dvd} from "../../models/Dvd";
import {AuthentificationserviceService} from "../../shared/authentificationservice.service";


@Component({
  selector: 'app-list-dvd',
  templateUrl: './list-dvd.component.html',
  styleUrls: ['./list-dvd.component.css']
})
export class ListDvdComponent implements OnInit {

  //input
  @Input() dvd
  @Input() index;


  dvds;
  searchValue: string;
  title;
  price;
  author;
  p:number=1;

  constructor(public dvdService: DvdService) { }
  // output
  @Output() parent:EventEmitter<any> = new EventEmitter();


  ngOnInit(): void {

    this.parent.emit("from child to parent");


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


  searchPrice(): void {
    this.dvdService.findByPrice(this.price)
      .subscribe(
        data => {
          this.dvds = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  searchDirector(): void {
    this.dvdService.findByDirector(this.author)
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
