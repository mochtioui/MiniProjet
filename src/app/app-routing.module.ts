import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {NgModule} from "@angular/core";
import {DvdComponent} from "./dvd/dvd.component";

const routes: Routes = [
  {
    path: '', component: HeaderComponent

  },
  {
    path: 'add', component: DvdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

