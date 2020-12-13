import {Injectable} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {agent} from "../models/agent";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationserviceService {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  listagent: agent[];

  public charger() {
    this.http.get<agent[]>('http://localhost:3000/agents/').subscribe(
      (data) => {
        this.listagent = data;
      }
    );
  }

  log;
  mdp;
  test: boolean = false;

  public login() {
    console.log(this.listagent);
    for (let i = 0; i < this.listagent.length; i++) {
      if ((this.listagent[i].login == this.log) && (this.listagent[i].mdp == this.mdp)) {
        this.router.navigate(['acceuil']);
        this.test = true;
      }

    }
    if (this.test == false) {
      alert('verifier votre mot de passe');
    }

  }




  createNewUser(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/agents/',data);
  }



}

