//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the ClassProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClassProvider {

  public classListRef: firebase.database.Reference;
  public userClassRef: firebase.database.Reference;
  public userRef: firebase.database.Reference;

  constructor() {
    console.log('Hello ClassProvider Provider');

    this.classListRef = firebase
      .database()
      .ref(`/class/classList`);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userClassRef = firebase
          .database()
          .ref(`/userProfile/${user.uid}`);

          this.userRef = firebase
          .database()
          .ref(`/userProfile/${user.uid}/classList`);
      }
    });
  }

  getClassList(): firebase.database.Reference {
    return this.classListRef;
  }

  getClassDetail(classId: string): firebase.database.Reference {
    return this.classListRef.child(classId);
  }

  getMyClassList(): firebase.database.Reference {
    return this.userRef;
  }


  addClass(classId: string,
    classTitle: string,
    classTrainer: string,
    classCategory: string,
    classNote: string,
    classStart: string,
    classEnd: string,
    classRoom: string
  ): PromiseLike<any> {
    return this.userClassRef
      .child(`/classList`)
      .push({
        classId: classId,
        title: classTitle,
        trainer: classTrainer,
        category: classCategory,
        note: classNote,
        startTime: classStart,
        endTime: classEnd,
        room: classRoom
      })
  }

  deleteClass(classId) {
    return this.userRef.child(classId).remove();
  }


}
