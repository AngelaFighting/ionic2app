import {Component} from '@angular/core';
import {Platform, NavParams, ViewController} from 'ionic-angular';


/**
 * Generated class for the ModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {

  character: Object;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController) {
    this.character = {
      name: 'Gollum',
      quote: 'Sneaky little hobbitses!',
      image: 'assets/img/avatar-gollum.jpg',
      items: [
        {title: 'Race', note: 'Hobbit'},
        {title: 'Culture', note: 'River Folk'},
        {title: 'Alter Ego', note: 'Smeagol'}
      ]
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
