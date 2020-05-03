import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DevuFormComponent } from '../devu-form/devu-form.component';
import { EventDescriptionComponent } from '../event-description/event-description.component';
import { DevuDataService } from '../service/devu-data.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public popoverController: PopoverController, public devuDataService: DevuDataService) {  }

  ngOnInit(){
    this.devuDataService.loadSaved();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: DevuFormComponent,
      componentProps: {popover: this.popoverController},
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  public bhajanDone(event){
    this.devuDataService.bhajanDone(event);
  }

  public async openDescription(ev: any){
    console.log("inside popover");
    const popover = await this.popoverController.create({
      component: EventDescriptionComponent,
      componentProps: {popover: this.popoverController, data: ev},
      translucent: true
    });
    return await popover.present();
  }

}
