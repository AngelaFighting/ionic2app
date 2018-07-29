import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';

@Injectable()
export class ToastService {
  constructor(private toastCtrl: ToastController) {
  }

  showToast(message: string, position: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
    console.log('show toast');
  }

  showToastWithCloseButton(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
