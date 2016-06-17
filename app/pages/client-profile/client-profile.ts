import {Page, NavController, NavParams} from 'ionic-angular';
import {Client} from '../../models/client'
import {WishList} from '../../models/wishList'
import {WishListService} from '../../providers/wishList-service/wishList-service'
import {Product} from '../../models/product'

@Page({
  templateUrl: 'build/pages/client-profile/client-profile.html',
  providers: [WishListService]
})
export class ClientProfilePage {
  client: Client;
  wishList: WishList;
  profileTrigger: string;
  products: Product[];

  constructor(private nav: NavController, navParams: NavParams, private wishListService: WishListService) {
    if(navParams.get('trigger')) {
      this.profileTrigger = navParams.get('trigger');
    }
    else{
      this.profileTrigger = "general";
    }

    this.client = navParams.get('client');
    this.wishList = navParams.get('wishList');
    

  }

  onPageDidEnter() {
    this.wishListService.getWishList().subscribe(
      data => {
        this.wishList = data.filter(x=>(x.client_id== this.client.id))[0];
        this.products = this.wishList.products;

      },
      err => {console.log(err);},
      () => {console.log("Finished fetching client WishList");}
  );
  }

  goToProfile() {
    this.profileTrigger = "profile";
  }



}
