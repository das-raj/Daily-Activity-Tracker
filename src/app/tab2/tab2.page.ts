import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DevuFormComponent } from '../devu-form/devu-form.component';
import { DevuDataService } from '../service/devu-data.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public popoverController: PopoverController, public devuDataService: DevuDataService) {}

  ngOnInit(){
    this.devuDataService.loadSaved();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: DevuFormComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  public bhajanDone(event){
    this.devuDataService.bhajanDone(event);
  }

}
