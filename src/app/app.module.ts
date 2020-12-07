import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddDvdComponent } from './add-dvd/add-dvd.component';
import { UpdateDvdComponent } from './update-dvd/update-dvd.component';
import { InfoDvdComponent } from './info-dvd/info-dvd.component';
import { HeaderComponent } from './header/header.component';
import { ListDvdComponent } from './list-dvd/list-dvd.component';
import { DvdComponent } from './dvd/dvd.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDvdComponent,
    UpdateDvdComponent,
    InfoDvdComponent,
    HeaderComponent,
    ListDvdComponent,
    DvdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
