import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {

  }

  goToProfile(): void {
    this.navCtrl.push("ProfilePage");
  }

  goToSocial() {
    this.navCtrl.push("SocialPage");
  }

  goToFindClass(){
    this.navCtrl.push("FindClassPage");
  }

  goToLocation(){
    this.navCtrl.push("LocationPage");
  }

  goToGallery(){
    this.navCtrl.push("GalleryPage");
  }
  

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
    this.navCtrl.setRoot("LoginPage");
    console.log("logged out")
      });
    }
    
  

}
