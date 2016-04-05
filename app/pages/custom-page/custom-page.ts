import {Page, Alert, NavController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/custom-page/custom-page.html'
})
export class CustomPage {
    constructor(private nav: NavController, navParams: NavParams) {

    }

    doAlert() {
        let alert = Alert.create({
            title: 'Yey!',
            subTitle: 'It works!',
            buttons: ['OK']
        });
        this.nav.present(alert);
    }
}
