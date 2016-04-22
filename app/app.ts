import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {CustomPage} from './pages/custom-page/custom-page'


@App({
  templateUrl: 'build/app.html',
  config: {
    backButtonText: '',
    menuType: 'overlay',
    backButtonIcon: 'ion-md-arrow-back'

  }
})
class MyApp {
  // make HelloIonicPage the root (or first) page
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
      { title: 'My Stores', component: HelloIonicPage, icon: 'home'},
      { title: 'Employers Management', component: ListPage, icon: 'cog' },
      { title: 'Statistics', component: ListPage, icon: 'stats' },
      { title: 'Client Messages', component: CustomPage, icon: 'chatbubbles' },
      { title: 'Order Tracking', component: ListPage, icon: 'basket' },
      { title: 'Products', component: ListPage, icon: 'barcode' },
      { title: 'App Settings', component: ListPage, icon: 'settings' },
      { title: 'Logout', component: ListPage, icon: 'power' }
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
