import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Dvd} from "../models/Dvd";


@Injectable(
  {
    providedIn: 'root'
  }
)
export class DvdService {
  form: FormGroup;
  dvds: Dvd[] ;

  //DvdUrl: string = 'http://localhost:3000/dvd/';
  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) {
  }

  /*
  listdvds: dvd[];
  getdvds() {
    return this.http.get<dvd[]>(this.DvdUrl);
  }

  public afficherdvds() {

    this.getdvds().subscribe(
      (data) => {
        this.listclients = data;
        console.log(this.listclients);
        this.nbr = 0;
        for (let i = 0; i < this.listclients.length; i++) {
          this.nbr++;
        }
      }
    );
  }
*/


  getAllDvds(){
    return this.http.get<Dvd[]>('http://localhost:3000/dvd/');
  }
  getDvdById(id:number){
    return this.http.get<Dvd>('http://localhost:3000/dvd/' +id);
  }

  deleteDvd(id:number) {
    return this.http.delete('http://localhost:3000/dvd/' + id);
  }

    addDvd(data:Dvd){
      this.router.navigate(['all']);
    return this.http.post<Dvd>('http://localhost:3000/dvd/' ,data);
     }

     updateDvd( id:any, data:any){
    return this.http.put<Dvd>('http://localhost:3000/dvd/' +id, data);

    }

  findByTitle(title: string): Observable<any> {
    let params1 = new HttpParams().set('title',title);
    return this.http.get('http://localhost:3000/dvd/',{params:params1});
  }


  findByPrice(price: string): Observable<any> {
    let params1 = new HttpParams().set('price',price);
    return this.http.get('http://localhost:3000/dvd/',{params:params1});
  }


  findByDirector(author: string): Observable<any> {
    let params1 = new HttpParams().set('author',author);
    return this.http.get('http://localhost:3000/dvd/',{params:params1});
  }

 /* adddvd(any)
  {
    this.addDvd(any).subscribe(()=>{
      this.router.navigate(['acceuil']);

      console.log("success");
    });
}

  */
  getDvds(){
    this.getAllDvds().subscribe((data)=>{
      this.dvds=data;console.log(this.dvds)

    }),
      errors =>{
        console.log(errors);
      }
  }


  deletedvd(id){
    this.deleteDvd(id).subscribe(()=>{
      this.router.navigate(['/all']);
      console.log("deleted");
    });
  }

  submit(form)
  {
    this.addDvd(form).subscribe(() =>{
      this.router.navigate(['http://localhost:3000/dvd']);
      console.log("dvd ajouter avec succee")
    })
  }





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

    console.log(this.dvds.length)
    this.affichcl = !this.affichcl;
    this.indice = -1;
    for (let i = 0; i < this.dvds.length; i++) {
      if ((critere == 'id') && (this.dvds[i].id == valeur)) {
        this.indice = i;
      }
      if ((critere == 'title') && (this.dvds[i].title == valeur)) {
        this.indice = i;
      }
      if ((critere == 'author') && (this.dvds[i].author == valeur)) {
        this.indice = i;
      }
      if ((critere == 'price') && (this.dvds[i].price == valeur)) {
        this.indice = i;
      }
      if ((critere == 'quantity') && (this.dvds[i].quantity == valeur)) {
        this.indice = i;
      }

    }
    console.log(this.indice);
    if (this.indice != -1) {
      this.idr = this.dvds[this.indice].id;
      this.nomr = this.dvds[this.indice].title;
      this.prenomr = this.dvds[this.indice].author;
      this.cinr = this.dvds[this.indice].price;
      this.numeror = this.dvds[this.indice].quantity;
    } else {
      this.affichcl = false;
      alert('ce dvd n\'existe pas');
    }
  }




}
