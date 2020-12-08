import { Component, Input, OnInit, ElementRef ,ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DvdService} from "../../shared/dvd.service";
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-info-dvd',
  templateUrl: './info-dvd.component.html',
  styleUrls: ['./info-dvd.component.css']
})
export class InfoDvdComponent implements OnInit {
  dvd;

  constructor(private route: ActivatedRoute,private router: Router, public bookService:DvdService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.bookService.getDvdById(id).subscribe((result)=>{
      this.dvd=result;
    });


  }
  onBack(){
    this.router.navigate(['/all']);
  }
  downloadPDF(){
    const options ={
      name: 'output.pdf',
      image: {type:'jpeg'},
      html2canvas: {},
      jsPDF: {orientation:'landscape'}
    }
    const element: Element = document.getElementById('contentToPDF')
    html2pdf()
      .from(element)
      .set(options)
      .save()

  }

}
