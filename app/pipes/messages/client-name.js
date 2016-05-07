var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var ClientNamePipe = (function () {
    function ClientNamePipe() {
    }
    ClientNamePipe.prototype.transform = function (clientId, allClients) {
        if (!clientId || !allClients || !allClients.length) {
            return;
        }
        var client = allClients[0].find(function (x) { return x.id == clientId; });
        return client.first_name + " " + client.last_name;
    };
    ClientNamePipe = __decorate([
        core_1.Pipe({
            name: 'clientName'
        })
    ], ClientNamePipe);
    return ClientNamePipe;
})();
exports.ClientNamePipe = ClientNamePipe;
//# sourceMappingURL=client-name.js.map