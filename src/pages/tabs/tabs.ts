import {Component, ViewChild} from '@angular/core';
import {Platform, Tabs} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {SettingPage} from '../setting/setting';
import {BackButtonService} from '../../services/backButton.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  //
  // constructor() {
  //
  // }
  tabRoots: Object[];
  @ViewChild('myTabs') tabRef: Tabs;

  // constructor() {
  //   this.tabRoots = [
  //     {
  //       root: HomePage,
  //       tabTitle: 'Home',
  //       tabIcon: 'home'
  //     },
  //     {
  //       root: ContactPage,
  //       tabTitle: 'Contact',
  //       tabIcon: 'notifications'
  //     },
  //     {
  //       root: AboutPage,
  //       tabTitle: 'About',
  //       tabIcon: 'document'
  //     },
  //     {
  //       root: SettingPage,
  //       tabTitle: 'Setting',
  //       tabIcon: 'person'
  //     }
  //   ];
  // }
  constructor(public backButtonService: BackButtonService,
              private platform: Platform) {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home'
      },
      {
        root: SettingPage,
        tabTitle: 'Setting',
        tabIcon: 'person'
      }
    ];

    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });
  }
}
