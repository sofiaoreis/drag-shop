import {Page, NavController, NavParams} from 'ionic-angular';
import {AccountRecoverNumPage} from '../account-recover-num/account-recover-num';


@Page({
  templateUrl: 'build/pages/account-recovery/account-recovery.html'
})
export class AccountRecoveryPage {
constructor(private nav: NavController, navParams: NavParams) {
  this.nav = nav;
}

donePressed() {
    this.nav.push(AccountRecoverNumPage, {});
}

  goBack() {
   this.nav.pop();
 }
}
