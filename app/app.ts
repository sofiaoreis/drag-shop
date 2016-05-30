<<<<<<< HEAD
import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {CustomPage} from './pages/custom-page/custom-page';
import{LoginPage} from './pages/login-page/login-page';
import{AppSettings} from './pages/app-settings/app-settings';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'Login', component: LoginPage },
      { title: 'App Settings', component: AppSettings },
      { title: 'My First List', component: ListPage },
      { title: 'Custom Page', component: CustomPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
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
}
=======
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
import {Statistics} from "./pages/statistics/statistics";
import{LoginPage} from './pages/login-page/login-page';
import {StoreList} from "./pages/store-list/store-list";


@App({
  templateUrl: 'build/app.html',
  config: {
    backButtonText: '',
    menuType: 'overlay',
    backButtonIcon: 'md-arrow-round-back'
  }, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [HTTP_PROVIDERS]
})
class MyApp {
  rootPage: any = HelloIonicPage;
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

      { title: 'Order Details', component: OrderDetails, icon: 'home'},
      { title: 'My Stores', component: StoreList, icon: 'home'},
      { title: 'Employers Management', component: ListPage, icon: 'cog' },
      { title: 'Statistics', component: Statistics, icon: 'stats' },
      { title: 'Client Messages', component: MessageListPage, icon: 'chatbubbles' },
      { title: 'Order Tracking', component: ListPage, icon: 'basket' },
      { title: 'Products', component: ListPage, icon: 'barcode' },
      { title: 'App Settings', component: ListPage, icon: 'settings' },
      { title: 'Login', component: LoginPage, icon: 'power' },
      { title: 'Logout', component: AccountRecoveryPage, icon: 'power' }
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
}
>>>>>>> master
