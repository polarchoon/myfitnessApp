import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinClassPage } from './join-class';

@NgModule({
  declarations: [
    JoinClassPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinClassPage),
  ],
})
export class JoinClassPageModule {}
