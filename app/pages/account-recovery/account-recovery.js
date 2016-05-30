var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ionic_angular_1 = require('ionic-angular');
var common_1 = require('angular2/common');
var account_recover_num_1 = require('../account-recover-num/account-recover-num');
var AccountRecoveryPage = (function () {
    function AccountRecoveryPage(nav, navParams, fb) {
        this.nav = nav;
        this.nav = nav;
        this.recoverForm = fb.group({
            'username': ['', common_1.Validators.compose([common_1.Validators.required])]
        });
        this.username = this.recoverForm.controls['username'];
    }
    AccountRecoveryPage.prototype.goBack = function () {
        this.nav.pop();
    };
    AccountRecoveryPage.prototype.onSubmit = function (value) {
        if (this.recoverForm.valid) {
            console.log('Submitted value: ', value);
        }
        this.nav.push(account_recover_num_1.AccountRecoverNumPage, {});
    };
    AccountRecoveryPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/account-recovery/account-recovery.html',
            directives: [common_1.FORM_DIRECTIVES]
        })
    ], AccountRecoveryPage);
    return AccountRecoveryPage;
})();
exports.AccountRecoveryPage = AccountRecoveryPage;
//# sourceMappingURL=account-recovery.js.map