import {Page, NavController, NavParams, ViewController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/app-settings/app-settings.html',
})
export class AppSettings {

  constructor(private nav: NavController, navParams: NavParams) {
    //Set the default value of the messages trigger so that the correct segment is open on page load

  }

}
