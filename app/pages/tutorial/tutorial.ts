import {Page , NavController, NavParams} from 'ionic-angular';
import {LoginPage} from '../login-page/login-page';



@Page({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})

export class TutorialPage {
  slides: any;

  constructor(private nav: NavController, navParams: NavParams) {
  }

  skip() {
    this.nav.setRoot(LoginPage);
  }


}
