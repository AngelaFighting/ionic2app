import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {SettingPage} from '../pages/setting/setting';
import {ModalComponent} from "../components/modal/modal";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';
import {FileTransfer} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {BackButtonService} from '../services/backButton.service';
import {ToastService} from '../services/toast.service';
import {PhotoService} from '../services/photo.service';
import {PopupService} from '../services/popup.service';

@NgModule({
  declarations: [// 声明组件
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage,
    ModalComponent,
  ],
  imports: [// 导入依赖的模块
    BrowserModule,
    HttpModule,
    // ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],// 设置启动入口根组件
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage,
    ModalComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackButtonService,
    ToastService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileTransfer,
    Camera,
    PhotoService,
    PopupService
  ]
})
export class AppModule {
}
