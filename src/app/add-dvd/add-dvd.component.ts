import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DvdService} from "../../shared/dvd.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['./add-dvd.component.css']
})
export class AddDvdComponent implements OnInit {
  form: FormGroup;
  imageSrc: String;

  constructor(public dvdService: DvdService, private router: Router, private fb: FormBuilder) {


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
onFileChange(event){
    const reader = new FileReader();
    if (event.target.files && event.target.files.length)
    {
      const [image] = event.target.files;

      reader.readAsDataURL(image)


      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.form.patchValue({

          fileSource: reader.result
        });

      };

    }


}
}
