import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindClassPage } from './find-class';

@NgModule({
  declarations: [
    FindClassPage,
  ],
  imports: [
    IonicPageModule.forChild(FindClassPage),
  ],
})
export class FindClassPageModule {}
