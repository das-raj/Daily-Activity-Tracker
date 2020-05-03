import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isTodayEvent',
})
export class IsTodayEventPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const todayDate = new Date().setHours(0,0,0,0);
    return ((new Date(value.timestamp).setHours(0,0,0,0)) == todayDate) && !value.status; 
  }

}
