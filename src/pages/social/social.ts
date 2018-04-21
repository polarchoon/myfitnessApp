import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialPage');
  }

  openPage(url){
    const browser = this.iab.create(url,'_self','location=no,toolbar=yes');
    browser.show()
  }

}
