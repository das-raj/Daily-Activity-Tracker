import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CountMinutePipe } from '../pipes/count-minute.pipe';
import { TodayEventsPipe } from '../pipes/today-events.pipe';
import { IsTodayEventPipe } from '../pipes/is-today-event.pipe';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, CountMinutePipe, TodayEventsPipe, IsTodayEventPipe]//, DevuFormComponent]
})
export class Tab2PageModule {}
