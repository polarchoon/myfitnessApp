import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Calendar } from '@ionic-native/calendar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { SocialPage } from '../pages/social/social';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { PhotoProvider } from '../providers/photo/photo';
import { ClassProvider } from '../providers/class/class';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    SocialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    SocialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ProfileProvider,
    Calendar,
    PhotoProvider,
    ClassProvider,
    InAppBrowser
  ]
})
export class AppModule {}
