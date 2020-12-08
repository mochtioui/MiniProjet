import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DvdService} from "../../shared/dvd.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-dvd',
  templateUrl: './update-dvd.component.html',
  styleUrls: ['./update-dvd.component.css']
})
export class UpdateDvdComponent implements OnInit {
  id;
  form: FormGroup;
  dvd;
  imageSrc: string;

  constructor(private dvdService:DvdService,private route: ActivatedRoute, private router: Router,private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null, [Validators.required]],
      title: [null, [Validators.required]],
      author: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      image: [null, [Validators.required]],
      fileSource: new FormControl('', [Validators.required])




    });
  }

  ngOnInit(): void {
  }
  onFileChange(event) {

    const reader = new FileReader();



    if(event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);



      reader.onload = () => {



        this.imageSrc = reader.result as string;



        this.form.patchValue({

          fileSource: reader.result

        });



      };



    }

  }
  modifyDvd(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.dvdService.getDvdById(this.id).subscribe((result)=>{
      this.dvd=result;
      this.form.patchValue(this.dvd);
    });

    this.dvdService.updateDvd(this.id,this.form.value).subscribe(() =>{
      this.router.navigate(['all']);

    });
  }

}
