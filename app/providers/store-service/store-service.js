var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
require('rxjs/Rx');
var StoreService = (function () {
    function StoreService(http, platform) {
        this.http = http;
        if (platform.is('android') && platform.is('cordova')) {
            this.storeUrl = '/android_asset/www/stores.json';
        }
        else {
            this.storeUrl = '/stores.json';
        }
    }
    StoreService.prototype.getStoreList = function () {
        return this.http.get(this.storeUrl).map(function (res) { return res.json(); });
    };
    StoreService = __decorate([
        core_1.Injectable()
    ], StoreService);
    return StoreService;
})();
exports.StoreService = StoreService;
//# sourceMappingURL=store-service.js.map