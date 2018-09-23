import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {Platform} from 'ionic-angular';
import {BackButtonService} from "../../services/backButton.service";
import {ToastService} from '../../services/toast.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              private backButtonService: BackButtonService,
              private toastService: ToastService,
              private platform: Platform) {

    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(null);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      this.toastService.showToast("请输入账号", "bottom");
    } else if (password.value.length == 0) {
      this.toastService.showToast("请输入密码", "bottom");
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      this.toastService.showToastWithCloseButton(userinfo);
      // 删除之前页面
      this.navCtrl.push(TabsPage).then(() => {
        const startIndex = this.navCtrl.getActive().index - 1;
        this.navCtrl.remove(startIndex, 1);
      });
    }
  }

}
