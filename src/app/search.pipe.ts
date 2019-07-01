import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: string): any {
    if(!value || !args || args=="")
      return value;
    let search = args.toLowerCase();
    return value.filter((el)=>{
      let prenom:string = el.prenom.toLowerCase();
      return prenom.includes(search);
    })
  }

}
