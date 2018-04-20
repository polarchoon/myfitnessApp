import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClassProvider } from '../../providers/class/class';

/**
 * Generated class for the JoinClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-class',
  templateUrl: 'join-class.html',
})
export class JoinClassPage {

  public currentClass: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public classProvider: ClassProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinClassPage');

    this.classProvider
    .getClassDetail(this.navParams.get("eventId"))
    .on("value", eventSnapshot => {
      this.currentClass = eventSnapshot.val();
      this.currentClass.id = eventSnapshot.key;
    });
  console.log(this.currentClass)
  }


  joinClass(): void {
    this.classProvider
      .addClass(
        this.currentClass.id,
        this.currentClass.title,
        this.currentClass.trainer,
        this.currentClass.category,
        this.currentClass.note,
        this.currentClass.startTime,
        this.currentClass.endTime,
        this.currentClass.room
      )
      this.navCtrl.pop();
  }



}
