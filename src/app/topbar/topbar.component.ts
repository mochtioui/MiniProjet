import { Component, OnInit } from '@angular/core';
import {AuthentificationserviceService} from "../../shared/authentificationservice.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  isAuth: boolean;

  constructor(public as: AuthentificationserviceService) {
  }


  ngOnInit(): void {


    let isAuth = this.as.test;
  }


}
