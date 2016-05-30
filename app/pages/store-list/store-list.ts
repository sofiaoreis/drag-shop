import {Page , NavController, NavParams} from 'ionic-angular';
import {StoreService} from '../../providers/store-service/store-service'
import {Store} from '../../models/stores'

@Page({
    templateUrl: 'build/pages/store-list/store-list.html',
    providers: [StoreService]
})


export class StoreList {
    stores: Store[];


    constructor(private nav: NavController, navParams: NavParams, private StoreService: StoreService) {

    }

    onPageDidEnter() {
        //get all stores
        this.StoreService.getStoreList().subscribe(
            data => {
                this.stores = data;
                console.log(this.stores);
            },
            err => {console.log(err);},
            () => {console.log("Finished fetching random crap");}
        );
    }
}