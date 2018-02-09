import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SplashPage} from '../splash/splash';

/**
 * Generated class for the BootpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bootpage',
  templateUrl: 'bootpage.html',
})
export class BootpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BootpagePage');
  }

  gotoSplash() {
    this.navCtrl.push(SplashPage);
  }
}
