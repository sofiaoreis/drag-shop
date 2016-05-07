var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
require('rxjs/Rx');
var Rx_1 = require('rxjs/Rx');
var MessagesService = (function () {
    function MessagesService(http, platform) {
        this.http = http;
        if (platform.is('android') && platform.is('cordova')) {
            this.messagesUrl = '/android_asset/www/messages.json';
            this.clientsUrl = '/android_asset/www/clients.json';
        }
        else {
            this.messagesUrl = '/messages.json';
            this.clientsUrl = '/clients.json';
        }
    }
    MessagesService.prototype.getMessageList = function () {
        //return this.http.get(this.url).map(res => <Message[]> res.json());
        return Rx_1.Observable.forkJoin(this.http.get(this.messagesUrl).map(function (res) { return res.json(); }), this.http.get(this.clientsUrl).map(function (res) { return res.json(); }));
    };
    MessagesService = __decorate([
        core_1.Injectable()
    ], MessagesService);
    return MessagesService;
})();
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages-service.js.map