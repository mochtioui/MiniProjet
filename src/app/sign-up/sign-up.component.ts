import { Component, OnInit } from '@angular/core';
import {AuthentificationserviceService} from "../../shared/authentificationservice.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: string;
  login;
  mdp;

  myimage: string = 'assets/images/gg.jpg';
  constructor(private fb: FormBuilder,
              private authService: AuthentificationserviceService,
              private router: Router) {

  }

  ngOnInit(): void {
  }
  initForm(){

  }
  Submit(f: NgForm)
  {
    this.authService.createNewUser(f).subscribe(() =>{
      this.router.navigate(['/all']);
      console.log("agent ajouter avec succee")
    })
  }

}
