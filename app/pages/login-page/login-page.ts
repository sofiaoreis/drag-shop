import {Page, NavController, NavParams} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';


@Page({
  templateUrl: 'build/pages/login-page/login-page.html'
})
export class LoginPage {
  constructor(private nav: NavController, navParams: NavParams) {

  }

  itemTapped() {
    this.nav.setRoot(HelloIonicPage);
  }
}
