import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialPage } from './social';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    SocialPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialPage),
  ],
  providers: [
    InAppBrowser
  ]
})
export class SocialPageModule {}
