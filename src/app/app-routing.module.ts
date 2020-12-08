import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {NgModule} from "@angular/core";
import {DvdComponent} from "./dvd/dvd.component";
import {AddDvdComponent} from "./add-dvd/add-dvd.component";
import {ListDvdComponent} from "./list-dvd/list-dvd.component";
import {UpdateDvdComponent} from "./update-dvd/update-dvd.component";

const routes: Routes = [
  {
    path: '', component: HeaderComponent

  },
  {
    path: 'add', component: AddDvdComponent
  },
  {
    path: 'all/add', component: AddDvdComponent
  },

  { path: 'dvd/:id', component: UpdateDvdComponent },

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

