import {Page , NavController, NavParams} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';


@Page({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})

export class TutorialPage {
  slides: any;

  constructor(private nav: NavController, navParams: NavParams) {
  }

  skip() {
    this.nav.setRoot(HelloIonicPage);
  }
}
