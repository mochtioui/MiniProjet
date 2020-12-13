import { Pipe, PipeTransform } from '@angular/core';
import {Dvd} from "../models/Dvd";



@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Dvds: Dvd[], searchValue: string): Dvd[] {
    if(!Dvds || !searchValue){
      return Dvds;
    }
    return Dvds.filter(dvd=>
      dvd.author.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      dvd.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      dvd.price.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      dvd.quantity.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  }

}
