import {Page , NavController, NavParams} from 'ionic-angular';
import {MostPurchasedService} from '../../providers/mostpurchased-service/mostpurchased-service'
import {MostPurchased} from '../../models/mostpurchased'
import {NgStyle} from "angular2/common";

@Page({
    templateUrl: 'build/pages/statistics/statistics.html',
    providers: [MostPurchasedService],
    directives: [NgStyle]
})

export class Statistics {
    mostpurchased: MostPurchased[];
    mostTrigger: string;

    constructor(private nav: NavController, navParams: NavParams, private MostPurchasedService: MostPurchasedService) {
        this.mostTrigger = "visited";
    }

    onPageDidEnter() {
        //get all messages from or to the current user
        this.MostPurchasedService.getMostPurchasedList().subscribe(
            data => {
                this.mostpurchased = data;
                console.log(this.mostpurchased);
            },
            err => {console.log(err);},
            () => {console.log("Finished fetching random crap");}
        );
    }
}

