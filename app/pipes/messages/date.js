var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var moment = require('moment');
var DateCalendarPipe = (function () {
    function DateCalendarPipe() {
    }
    DateCalendarPipe.prototype.transform = function (message) {
        if (!message) {
            return;
        }
        return moment(new Date(message.date)).calendar(null, {
            sameDay: '[TODAY]',
            nextDay: '[TOMORROW]',
            nextWeek: 'dddd',
            lastDay: '[YESTERDAY]',
            lastWeek: '[LAST] dddd',
            sameElse: '[MORE THAN 1 WEEK]'
        });
    };
    DateCalendarPipe = __decorate([
        core_1.Pipe({
            name: 'dateCalendar'
        })
    ], DateCalendarPipe);
    return DateCalendarPipe;
})();
exports.DateCalendarPipe = DateCalendarPipe;
var DateChatPipe = (function () {
    function DateChatPipe() {
    }
    DateChatPipe.prototype.transform = function (message) {
        if (!message) {
            return;
        }
        return moment(new Date(message.date)).format("hh:mm a");
    };
    DateChatPipe = __decorate([
        core_1.Pipe({
            name: 'dateChat'
        })
    ], DateChatPipe);
    return DateChatPipe;
})();
exports.DateChatPipe = DateChatPipe;
//# sourceMappingURL=date.js.map