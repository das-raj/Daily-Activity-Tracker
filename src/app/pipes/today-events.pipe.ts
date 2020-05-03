import { Pipe, PipeTransform } from '@angular/core';

// returns today's events from the array of all events
@Pipe({
  name: 'todayEvents',
  pure: false
})
export class TodayEventsPipe implements PipeTransform {

  transform(values: any, ...args: any[]): any {
    console.log("Today's Events Pipe");
    console.log(values);
    const today = [];
    const todayDate = new Date().setHours(0,0,0,0);
    for(let value of values){
      if((new Date(value.timestamp).setHours(0,0,0,0))==todayDate && !value.status)
        today.push(value);
    }
    return today;
  }

}
