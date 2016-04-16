import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/account-recover-num/account-recover-num.html'
})

export class AccountRecoverNumPage {
  constructor(private nav: NavController, navParams: NavParams) {
    this.nav = nav;
  }

  goBack() {
   this.nav.pop();
 }
}
