import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countMinute',
  pure: false
})
export class CountMinutePipe implements PipeTransform {

  // counts bhajan minutes left for today
  transform(values: any, ...args: any[]): any {
    console.log(values);
    const today = new Date().setHours(0,0,0,0);
    var count = 0;
    for(let value of values){
      if((new Date(value.timestamp).setHours(0,0,0,0))==today && !value.status)
        count++; 
    }
    return count;
  }

}
