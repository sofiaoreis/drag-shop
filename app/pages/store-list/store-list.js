var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ionic_angular_1 = require('ionic-angular');
var store_service_1 = require('../../providers/store-service/store-service');
var StoreList = (function () {
    function StoreList(nav, navParams, StoreService) {
        this.nav = nav;
        this.StoreService = StoreService;
    }
    StoreList.prototype.onPageDidEnter = function () {
        var _this = this;
        //get all stores
        this.StoreService.getStoreList().subscribe(function (data) {
            _this.stores = data;
            console.log(_this.stores);
        }, function (err) { console.log(err); }, function () { console.log("Finished fetching random crap"); });
    };
    StoreList = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/store-list/store-list.html',
            providers: [store_service_1.StoreService]
        })
    ], StoreList);
    return StoreList;
})();
exports.StoreList = StoreList;
//# sourceMappingURL=store-list.js.map