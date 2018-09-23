import {Component} from '@angular/core';
import {IonicPage, NavController, ModalController, App} from 'ionic-angular';
import {ModalComponent} from "../../components/modal/modal";
import {PhotoService} from '../../services/photo.service';
import {PopupService} from '../../services/popup.service';
import {LoginPage} from "../login/login";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private photoService: PhotoService,
              private popupService: PopupService,
              private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  presentModal() {//创建模态框方法
    let modal = this.modalCtrl.create(ModalComponent);
    modal.present();
  }

  setAvatar() {
    this.photoService.presentPhotoActionSheet();
  }

  setUserName() {
    this.popupService.showConfirm();
  }

  logOut() {
    //调用this.app.getRootNav() 从根页面跳转就可以了
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }

}
