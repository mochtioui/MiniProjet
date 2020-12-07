import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DvdService {
  form: FormGroup;
  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) {
  }
  addDvd(data:any):Observable<any>{
    return this.http.post('/api/dvd' ,data);
  }
  submit(form)
  {
    this.addDvd(form).subscribe(() =>{
      this.router.navigate(['/dvds']);
      console.log("dvd ajouter avec succee")
    })
  }
}
