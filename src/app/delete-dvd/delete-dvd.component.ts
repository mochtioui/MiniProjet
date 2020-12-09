import { Component, OnInit } from '@angular/core';
import {DvdService} from "../../shared/dvd.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-delete-dvd',
  templateUrl: './delete-dvd.component.html',
  styleUrls: ['./delete-dvd.component.css']
})
export class DeleteDvdComponent implements OnInit {

  id;
  constructor(private dvdService:DvdService,private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dvdService.deleteDvd(this.id).subscribe(()=>{
      this.router.navigate(['/all']);
      console.log("deleted");
    });
  }

}
