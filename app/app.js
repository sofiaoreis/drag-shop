var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require('es6-shim');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var hello_ionic_1 = require('./pages/hello-ionic/hello-ionic');
var list_1 = require('./pages/list/list');
var order_details_1 = require('./pages/order-details/order-details');
var http_1 = require('angular2/http');
var message_list_1 = require("./pages/message-list/message-list");
var statistics_1 = require("./pages/statistics/statistics");
var MyApp = (function () {
    function MyApp(app, platform, menu) {
        this.app = app;
        this.platform = platform;
        this.menu = menu;
        this.rootPage = hello_ionic_1.HelloIonicPage;
        this.initializeApp();
        this.user =
            [
                { path: 'img/logo.png', firstname: 'Sofia', lastname: 'Reis', role: 'Storeowner' }
            ];
        // set our app's pages
        this.pages = [
            { title: 'Order Details', component: order_details_1.OrderDetails, icon: 'home' },
            { title: 'My Stores', component: hello_ionic_1.HelloIonicPage, icon: 'home' },
            { title: 'Employers Management', component: list_1.ListPage, icon: 'cog' },
            { title: 'Statistics', component: statistics_1.Statistics, icon: 'stats' },
            { title: 'Client Messages', component: message_list_1.MessageListPage, icon: 'chatbubbles' },
            { title: 'Order Tracking', component: list_1.ListPage, icon: 'basket' },
            { title: 'Products', component: list_1.ListPage, icon: 'barcode' },
            { title: 'App Settings', component: list_1.ListPage, icon: 'settings' },
            { title: 'Logout', component: list_1.ListPage, icon: 'power' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            ionic_native_1.StatusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        var nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    };
    MyApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'build/app.html',
            config: {
                backButtonText: '',
                menuType: 'overlay',
                backButtonIcon: 'md-arrow-round-back'
            },
            providers: [http_1.HTTP_PROVIDERS]
        })
    ], MyApp);
    return MyApp;
})();
//# sourceMappingURL=app.js.map