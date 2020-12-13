import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {NgModule} from "@angular/core";

import {AddDvdComponent} from "./add-dvd/add-dvd.component";
import {ListDvdComponent} from "./list-dvd/list-dvd.component";
import {UpdateDvdComponent} from "./update-dvd/update-dvd.component";
import {InfoDvdComponent} from "./info-dvd/info-dvd.component";
import {DeleteDvdComponent} from "./delete-dvd/delete-dvd.component";
import {SignUpComponent} from "./sign-up/sign-up.component";


const routes: Routes = [
  {
    path: '', component: HeaderComponent

  },
  { path: 'reload/:id', component: DeleteDvdComponent },
  {
    path: 'add', component: AddDvdComponent
  },
  {
    path: 'all/add', component: AddDvdComponent
  },

  { path: 'update/:id', component: UpdateDvdComponent },

  { path: 'details/:id', component: InfoDvdComponent },
  { path: 'sginup', component: SignUpComponent },
  {

    path: 'home', component: ListDvdComponent
  },
  {

    path: 'all', component: ListDvdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

