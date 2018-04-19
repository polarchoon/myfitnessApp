import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from "../providers/auth/auth";

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
// import { LoginPage } from '../pages/login/login';

import { firebaseConfig } from './credentials';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage: any;

  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,  public authProvider: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp(firebaseConfig)

      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.rootPage = 'LoginPage';
          unsubscribe();
        }
        else {
          this.rootPage = HomePage;
          unsubscribe();
        }
      });
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:"md-home" },
      { title: 'Support', component: ListPage, icon:"md-call" },
      { title: 'Profile', component: ProfilePage, icon:"md-person" },
      // { title: 'Logout', component: LoginPage, icon:"md-log-out" }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}





























  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }




  // openPage(page : any) : void
  // {
  //    // Ensure we can log out of Firebase and reset the root page
  //    if(page == 'Logout')
  //    {
  //       // this.authProvider.logoutUser();
  //       this.authProvider.logoutUser()
  //       .then((data : any) =>
  //       {
  //          this.nav.setRoot(page.component);
  //          console.log("logged out")
  //       })
  //       .catch((error : any) =>
  //       {
  //          console.dir(error);
  //       });
  //       //this.nav.setRoot("LoginPage");
        



  //            }
  //    else
  //    {
  //       this.nav.setRoot(page.component);
  //       console.log("Out")
  //    }
  // }

//   openPage(page : any) : void
//   {
//      // Ensure we can log out of Firebase and reset the root page
//      if(page == 'Logout')
//      {
//         this.authProvider.logoutUser();
//         // .then((data : any) =>
//         // {
//         //    this.nav.setRoot("LoginPage");
//         // })
//         // .catch((error : any) =>
//         // {
//         //    console.dir(error);
//         // });
//      }

//      // Otherwise reset the content nav to have just this page
//      // we wouldn't want the back button to show in this scenario
//      else
//      {
//         this.nav.setRoot(page.component);
//      }
//   }
// }


  // openPage(page : any) : void
  // {
  //    // Ensure we can log out of Firebase and reset the root page
  //    if(page == 'Logout')
  //    {
  //     let alert = this.alertCtrl.create({
  //       title: 'Confirm Log Out',
  //       message: 'Are you sure you want to log out?',
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           role: 'cancel',
  //           handler: () => {
  //             console.log('Cancel clicked');
  //           }
  //         },
  //         {
  //           text: 'Log Out',
  //           handler: () => {
  //             this.authProvider.logoutUser()
  //             .then((data : any) =>
  //             {
  //                this.nav.setRoot("LoginPage");
  //             })
  //             .catch((error : any) =>
  //             {
  //                console.dir(error);
  //             });
  //             console.log('Logged out');
  //           }
  //         }
  //       ]
  //     });
  //     alert.present();
  //    }
  //    // Otherwise reset the content nav to have just this page
  //    // we wouldn't want the back button to show in this scenario
  //    else
  //    {
  //       this.nav.setRoot(page.component);
  //    }
  // }




