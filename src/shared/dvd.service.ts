import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
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
  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) {
  }

  getAllDvds(){
    return this.http.get<Dvd[]>('http://localhost:3000/dvd/');
  }
  deleteDvd(id:number) {
    return this.http.delete('http://localhost:3000/dvd/' + id);
  }



    addDvd(data:any):Observable<any>{
      this.router.navigate(['all']);
    return this.http.post('http://localhost:3000/dvd/' ,data);
  }

  getDvdById(id:number){
    return this.http.get<Dvd>('http://localhost:3000/dvd/' +id);
  }

 /* adddvd(any)
  {
    this.addDvd(any).subscribe(()=>{
      this.router.navigate(['acceuil']);

      console.log("success");
    });
}

  */

  updateDvd( id:any, data:any){
    return this.http.put<Dvd>('http://localhost:3000/dvd/' +id, data);

  }

  deletedvd(id){
    this.deleteDvd(id).subscribe(()=>{
      this.router.navigate(['http://localhost:3000/dvd']);
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
}
