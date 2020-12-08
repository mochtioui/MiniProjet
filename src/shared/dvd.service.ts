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
    return this.http.get<Dvd[]>('/api/dvds/');
  }
  deleteDvd(id:number) {
    return this.http.delete('http://localhost:3000/dvds/' + id);
  }



    addDvd(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/dvd/' ,data);
  }

  deletedvd(id){
    this.deleteDvd(id).subscribe(()=>{
      this.router.navigate(['/dvds']);
      console.log("deleted");
    });
  }

  submit(form)
  {
    this.addDvd(form).subscribe(() =>{
      this.router.navigate(['/dvds']);
      console.log("dvd ajouter avec succee")
    })
  }
}
