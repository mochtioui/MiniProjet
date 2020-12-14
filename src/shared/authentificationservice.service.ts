import {Injectable} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {agent} from "../models/agent";
import {Observable} from "rxjs";
import {DvdService} from "./dvd.service";
import {Dvd} from "../models/Dvd";
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



  listdvds: Dvd[];

  getclients() {
    return this.http.get<Dvd[]>('http://localhost:3000/dvd');

  }
nbr

  public afficherclients() {

    this.getclients().subscribe(
      (data) => {
        this.listdvds = data;
        console.log(this.listdvds);
        this.nbr = 0;
        for (let i = 0; i < this.listdvds.length; i++) {
          this.nbr++;
        }
      }
    );
  }





  a:DvdService

  critere: string;
  valeur;
  indice: number;
  idr;
  nomr;
  prenomr;
  cinr;
  numeror;
  affichcl = false;




  rechercheindice1(critere, valeur) {

    console.log(this.listdvds)
    this.affichcl = !this.affichcl;
    this.indice = -1;
    for (let i = 0; i < this.listdvds.length; i++) {
      if ((critere == 'id') && (this.listdvds[i].id == valeur)) {
        this.indice = i;
      }
      if ((critere == 'title') && (this.listdvds[i].title == valeur)) {
        this.indice = i;
      }
      if ((critere == 'author') && (this.listdvds[i].author == valeur)) {
        this.indice = i;
      }
      if ((critere == 'price') && (this.listdvds[i].price == valeur)) {
        this.indice = i;
      }
      if ((critere == 'quantity') && (this.listdvds[i].quantity == valeur)) {
        this.indice = i;
      }

    }
    console.log(this.indice);
    if (this.indice != -1) {
      this.idr = this.listdvds[this.indice].id;
      this.nomr = this.listdvds[this.indice].title;
      this.prenomr = this.listdvds[this.indice].author;
      this.cinr = this.listdvds[this.indice].price;
      this.numeror = this.listdvds[this.indice].quantity;
    } else {
      this.affichcl = false;
      alert('ce dvd n\'existe pas');
    }
  }







}

