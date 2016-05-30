var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var UnreadMessagesPipe = (function () {
    function UnreadMessagesPipe() {
    }
    UnreadMessagesPipe.prototype.transform = function (allMessages) {
        if (!allMessages || !allMessages.length) {
            return;
        }
        //TODO: change the hard-coded value of the user id to the current logged in user
        return allMessages.filter(function (message) { return (message.status == "not seen") && (message.to_id == 1); });
    };
    UnreadMessagesPipe = __decorate([
        core_1.Pipe({
            name: 'unreadMessages'
        })
    ], UnreadMessagesPipe);
    return UnreadMessagesPipe;
})();
exports.UnreadMessagesPipe = UnreadMessagesPipe;
//# sourceMappingURL=unread-messages-pipe.js.map