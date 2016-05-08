import {Page, NavController, NavParams} from 'ionic-angular';
import {Client} from '../../models/client'

@Page({
  templateUrl: 'build/pages/client-profile/client-profile.html'
})
export class ClientProfilePage {
  client: Client;

  constructor(private nav: NavController, navParams: NavParams) {
    this.client = navParams.get('client');
  }


}
