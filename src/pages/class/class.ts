import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClassProvider } from '../../providers/class/class';
import { of } from "rxjs/observable/of";

/**
 * Generated class for the ClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage {

  public eventSource: Array<any>;

  categories$ = of([
    { id: "cat1", name: "All"}, 
    { id: "cat2", name: "Zumba" }, 
    { id: "cat3", name: "Yoga" },
    { id: "cat4", name: "TRX" },
    { id: "cat5", name: "BodyPump" }
  ]);

  constructor(public navCtrl: NavController, public navParams: NavParams, public classProvider:ClassProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassPage');
  

  this.classProvider.getClassList().orderByChild("startTime").on("value", eventListSnapshot => {
    this.eventSource = [];
    eventListSnapshot.forEach(snap => {
    this.eventSource.push({
    id: snap.key,
    title: snap.val().title,
    trainer:snap.val().trainer,
    category: snap.val().category,
    startTime: new Date(snap.val().startTime)
      });
      return false;
      });
    });
  }

    optionCategorySelected($event) {
      console.log("name " + $event.name)
      if($event.name=="All"){
        
        //display all event
        this.classProvider.getClassList().orderByChild("startTime").on("value", eventListSnapshot => {
          this.eventSource = [];
          eventListSnapshot.forEach(snap => {
          this.eventSource.push({
          id: snap.key,
          title: snap.val().title,
          trainer: snap.val().trainer,
          category: snap.val().category,
          startTime: new Date(snap.val().startTime)
            });
            return false;
            });
          });
           console.log("source " + this.eventSource);
      }
      else{
        //display by category
        this.classProvider.getClassList().orderByChild("category").equalTo($event.name).on("value", eventListSnapshot => {
          this.eventSource = [];
          eventListSnapshot.forEach(snap => {
          this.eventSource.push({
          id: snap.key,
          title: snap.val().title,
          trainer:snap.val().trainer,
          category: snap.val().category,
          startTime: new Date(snap.val().startTime)
            });
            return false;
            });
          });
      }
      console.log("category selected");
      console.log($event);
    }
  
  
    goToClassDetail(eventId):void {
      this.navCtrl.push('JoinClassPage', { eventId: eventId });
      }












}
