import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {AccountRecoveryPage} from './pages/account-recovery/account-recovery';
import {ListPage} from './pages/list/list';
import {CustomPage} from './pages/custom-page/custom-page'
import {OrderList} from './pages/order-list/order-list'
import {OrderDetails} from './pages/order-details/order-details'
import {HTTP_PROVIDERS} from 'angular2/http'
import {MessageListPage} from "./pages/message-list/message-list";
import {OrdersTrackingPage} from "./pages/orders-tracking/orders-tracking";
import {ManagmentList} from './pages/managment-list/managment-list';
import {ClientListPage} from "./pages/client-list/client-list";
import {Statistics} from "./pages/statistics/statistics";
import {LoginPage} from './pages/login-page/login-page';
import {StoreList} from "./pages/store-list/store-list";
import {AppSettings} from './pages/app-settings/app-settings';
import {TutorialPage} from './pages/tutorial/tutorial';


@App({
  templateUrl: 'build/app.html',
  config: {
    backButtonText: '',
    menuType: 'overlay',
    backButtonIcon: 'md-arrow-round-back'
  },
  providers: [HTTP_PROVIDERS]
})
class MyApp {
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any, icon: string}>;
  user: Array<{path: string, firstname: string, lastname: string, role: string}>

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    this.user =
    [
      {path: 'img/logo.png', firstname: 'Sofia', lastname: 'Reis', role: 'Storeowner'}
    ]
    // set our app's pages
    this.pages = [

      { title: 'Order Details', component: OrderList, icon: 'home'},
      { title: 'My Stores', component: StoreList, icon: 'home'},
      { title: 'Employers Management', component: ManagmentList, icon: 'cog' },
      { title: 'Statistics', component: Statistics, icon: 'stats' },
      { title: 'Client Messages', component: MessageListPage, icon: 'chatbubbles' },
      { title: 'Clients', component: ClientListPage, icon: 'contacts' },
      { title: 'Order Tracking', component: OrdersTrackingPage, icon: 'basket' },
      { title: 'Products', component: ListPage, icon: 'barcode' },
      { title: 'Settings', component: ListPage, icon: 'cog'},
      { title: 'App Settings', component: AppSettings, icon: 'cog'},
      { title: 'Settings', component: ListPage, icon: 'settings' },
      { title: 'Account Recovery', component: AccountRecoveryPage, icon: 'power' },
      { title: 'Logout', component: LoginPage, icon: 'power' }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
/*
  isInitialRun () {
    let value = this.localStorage.get("initialRun") || "true";
    return value == "true";
  }

  setInitialRun(state) {
    this.localStorage.set("initialRun", (state ? "true" : "false"));
  }
  */
}
