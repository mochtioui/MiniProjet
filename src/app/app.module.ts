import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddDvdComponent } from './add-dvd/add-dvd.component';
import { UpdateDvdComponent } from './update-dvd/update-dvd.component';
import { InfoDvdComponent } from './info-dvd/info-dvd.component';
import { HeaderComponent } from './header/header.component';
import { ListDvdComponent } from './list-dvd/list-dvd.component';
import { DvdComponent } from './dvd/dvd.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { DeleteDvdComponent } from './delete-dvd/delete-dvd.component';
import {NgOrderByPipeModule} from "angular-pipes";
import {NgxPaginationModule} from "ngx-pagination";
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDvdComponent,
    UpdateDvdComponent,
    InfoDvdComponent,
    HeaderComponent,
    ListDvdComponent,
    DvdComponent,
    DeleteDvdComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgOrderByPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
