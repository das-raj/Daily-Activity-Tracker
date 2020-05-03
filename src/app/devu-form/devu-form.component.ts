import { Component, OnInit, Input } from '@angular/core';
import { DevuDataService } from '../service/devu-data.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-devu-form',
  templateUrl: './devu-form.component.html',
  styleUrls: ['./devu-form.component.scss'],
})
export class DevuFormComponent implements OnInit {

  public category: string;
  public description: string;
  @Input() popover: PopoverController;

  constructor(public devuDataService:DevuDataService) { }

  ngOnInit() {}

  submit(){
    if(this.category!=null && this.description!=null)
    this.devuDataService.addDevu(this.category, this.description);
    this.popover.dismiss();
  }
}
