import {Page, NavController, NavParams} from 'ionic-angular';
import {Client} from '../../models/client'
import {WishList} from '../../models/wishList'
import {WishListService} from '../../providers/wishList-service/wishList-service'
import {Product} from '../../models/product'
import {OrdersService} from '../../providers/orders-service/orders-service'
import {Order} from '../../models/order'
import {OrderDetails} from '../order-details/order-details'

@Page({
  templateUrl: 'build/pages/client-profile/client-profile.html',
  providers: [WishListService, OrdersService]
})
export class ClientProfilePage {
  client: Client;
  wishList: WishList;
  profileTrigger: string;
  products: Product[];
  orders: Order[];
  unfinishedOrders: Order[];

  constructor(private nav: NavController, navParams: NavParams, private wishListService: WishListService, private ordersService: OrdersService) {
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
  this.ordersService.getOrders().subscribe(
    data => {
      this.orders = data.filter(x=>(x.client_id== this.client.id && x.status==3));
      this.unfinishedOrders = data.filter(x=>(x.client_id== this.client.id && x.status==5));
    },
    err => {console.log(err);},
    () => {console.log("Finished fetching client WishList");}
);





  }

  goToProfile() {
    this.profileTrigger = "profile";
  }

  goToOrders(item) {
    this.nav.push(OrderDetails, {order:item});
  }





}
