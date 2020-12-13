import { Component, OnInit } from '@angular/core';
import {agent} from "../../models/agent";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthentificationserviceService} from "../../shared/authentificationservice.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listagent: agent[];

  constructor(private agentactivatedRoute: ActivatedRoute, private router: Router, private http: HttpClient, public as: AuthentificationserviceService) {
    this.http.get<[]>('http://localhost:3000/agents/').subscribe(
      (data) => {
        this.listagent = data;
      }
    );
  }
  myimage: string = 'assets/images/netflix.jpg';
  log;
  mdp;
  test: boolean = false;

  login(log, mdp) {
    console.log(this.listagent);
    for (let i = 0; i < this.listagent.length; i++) {
      if ((this.listagent[i].login == log) && (this.listagent[i].mdp == mdp)) {
        this.router.navigate(['all']);
        this.test = true;
      }

    }
    if (this.test == false) {
      alert('verifier votre mot de passe');
    }

  }

  public signup() {
    this.router.navigate(['sginup']);
  }


  ngOnInit(): void {
  }

}
