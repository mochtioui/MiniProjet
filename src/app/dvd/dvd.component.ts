import {Component, Input, OnInit} from '@angular/core';
import {DvdService} from "../../shared/dvd.service";

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {
  @Input() dvd
  @Input() index;
  dvds;

  constructor(public dvdService: DvdService) {

  }

  ngOnInit(): void {
  }

}
