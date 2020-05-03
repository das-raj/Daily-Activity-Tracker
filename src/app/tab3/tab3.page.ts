import { Component } from '@angular/core';
import { DevuDataService } from '../service/devu-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public devuDataService: DevuDataService) {}

  ngOnInit(){
    // this.devuDataService.generateReport();
    this.devuDataService.generateReport2();
  }

  public dataLoaded(){
    const length = Object.keys(this.devuDataService.reports).length;
    console.log("Length = "+length);
    return length!=0;
  }

  public getDate(key){
    return new Date(new Date(parseInt(key)));
  }
}
