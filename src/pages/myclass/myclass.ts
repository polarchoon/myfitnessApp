import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClassProvider } from '../../providers/class/class';
import { of } from "rxjs/observable/of";

/**
 * Generated class for the MyclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myclass',
  templateUrl: 'myclass.html',
})
export class MyclassPage {

  public eventSource: Array<any>;
  
  categories$ = of([
    { id: "cat1", name: "All" },
    { id: "cat2", name: "Zumba" },
    { id: "cat3", name: "Yoga" },
    { id: "cat4", name: "TRX" },
    { id: "cat5", name: "BodyPump" }
  ]);

  constructor(public navCtrl: NavController, public navParams: NavParams, public classProvider: ClassProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyclassPage');

    this.classProvider.getMyClassList().orderByChild("startTime").on("value", eventListSnapshot => {
      this.eventSource = [];
      eventListSnapshot.forEach(snap => {
        this.eventSource.push({
          id: snap.key,
          title: snap.val().title,
          trainer: snap.val().trainer,
          category: snap.val().category,
          note: snap.val().note,
          startTime: new Date(snap.val().startTime),
          endTime: new Date(snap.val().endTime),
          room: snap.val().room
        });
        return false;
      });
    });
  }



  optionCategorySelected($event) {
    console.log("name " + $event.name)
    if ($event.name == "All") {

      //display all event
      this.classProvider.getMyClassList().orderByChild("startTime").on("value", eventListSnapshot => {
        this.eventSource = [];
        eventListSnapshot.forEach(snap => {
          this.eventSource.push({
            id: snap.key,
            title: snap.val().title,
            trainer: snap.val().trainer,
            category: snap.val().category,
            note: snap.val().note,
            startTime: new Date(snap.val().startTime),
            endTime: new Date(snap.val().endTime),
            room: snap.val().room
          });
          return false;
        });
      });
      console.log("source " + this.eventSource);
    }
    else {
      //display by category
      this.classProvider.getMyClassList().orderByChild("category").equalTo($event.name).on("value", eventListSnapshot => {
        this.eventSource = [];
        eventListSnapshot.forEach(snap => {
          this.eventSource.push({
            id: snap.key,
            title: snap.val().title,
            trainer: snap.val().trainer,
            category: snap.val().category,
            note: snap.val().note,
            startTime: new Date(snap.val().startTime),
            endTime: new Date(snap.val().endTime),
            room: snap.val().room
          });
          return false;
        });
      });
    }
    console.log("category selected");
    console.log($event);
  }

  deleteClass(event){
    console.log("delete " + event);
    this.classProvider.deleteClass(event);
  }








}
