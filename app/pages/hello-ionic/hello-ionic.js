var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ionic_angular_1 = require('ionic-angular');
var mostpurchased_service_1 = require('../../providers/mostpurchased-service/mostpurchased-service');
var common_1 = require("angular2/common");
var HelloIonicPage = (function () {
    function HelloIonicPage(nav, navParams, MostPurchasedService) {
        this.nav = nav;
        this.MostPurchasedService = MostPurchasedService;
        this.mostTrigger = "visited";
    }
    HelloIonicPage.prototype.onPageDidEnter = function () {
        var _this = this;
        //get all messages from or to the current user
        this.MostPurchasedService.getMostPurchasedList().subscribe(function (data) {
            _this.mostpurchased = data;
            console.log(_this.mostpurchased);
        }, function (err) { console.log(err); }, function () { console.log("Finished fetching random crap"); });
    };
    HelloIonicPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
            providers: [mostpurchased_service_1.MostPurchasedService],
            directives: [common_1.NgStyle]
        })
    ], HelloIonicPage);
    return HelloIonicPage;
})();
exports.HelloIonicPage = HelloIonicPage;
//# sourceMappingURL=hello-ionic.js.map