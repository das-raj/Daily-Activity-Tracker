import { Pipe, PipeTransform } from '@angular/core';

// returns keys of report dictionary
@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Object.keys(value)//.map(key => value[key]);
  }

}
