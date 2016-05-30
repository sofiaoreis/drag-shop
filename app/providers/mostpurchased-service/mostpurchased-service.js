var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
require('rxjs/Rx');
var MostPurchasedService = (function () {
    function MostPurchasedService(http, platform) {
        this.http = http;
        if (platform.is('android') && platform.is('cordova')) {
            this.mostpurchasedUrl = '/android_asset/www/mostpurchased.json';
        }
        else {
            this.mostpurchasedUrl = '/mostpurchased.json';
        }
    }
    MostPurchasedService.prototype.getMostPurchasedList = function () {
        //return this.http.get(this.url).map(res => <Message[]> res.json());
        return this.http.get(this.mostpurchasedUrl).map(function (res) { return res.json(); });
    };
    MostPurchasedService = __decorate([
        core_1.Injectable()
    ], MostPurchasedService);
    return MostPurchasedService;
})();
exports.MostPurchasedService = MostPurchasedService;
//# sourceMappingURL=mostpurchased-service.js.map