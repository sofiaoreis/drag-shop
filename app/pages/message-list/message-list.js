var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ionic_angular_1 = require('ionic-angular');
var messages_service_1 = require('../../providers/messages-service/messages-service');
var messages_1 = require('../messages/messages');
var unread_messages_pipe_1 = require('../../pipes/messages/unread-messages-pipe');
var client_name_1 = require('../../pipes/messages/client-name');
var received_messages_1 = require('../../pipes/messages/received-messages');
var date_1 = require('../../pipes/messages/date');
var limit_messages_1 = require('../../pipes/messages/limit-messages');
var MessageListPage = (function () {
    function MessageListPage(nav, navParams, messagesService) {
        var _this = this;
        this.nav = nav;
        this.messagesService = messagesService;
        this.conversations = [];
        //Set the default value of the messages trigger so that the correct segment is open on page load
        this.messagesTrigger = "unread";
        //get all from or to the current user
        messagesService.getMessageList().subscribe(function (data) {
            _this.messages = data[0];
            _this.clients = data[1];
            _this.organizeMessages();
        }, function (err) { console.log(err); }, function () { console.log("Finished fetching client messages"); });
    }
    MessageListPage.prototype.organizeMessages = function () {
        var _this = this;
        //sort all messages by date
        this.messages.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        //group messages in conversations
        //TODO: change hard-coded value
        this.messages.forEach(function (x) {
            var otherPersonId = (x.from_id === 1) ? x.to_id : x.from_id;
            var found = false;
            _this.conversations.forEach(function (y) {
                if (y.id === otherPersonId) {
                    y.messages.push(x);
                    found = true;
                }
            });
            if (!found) {
                var clientName = new client_name_1.ClientNamePipe().transform(otherPersonId, new Array(_this.clients));
                _this.conversations.push({ id: otherPersonId, name: clientName, messages: [x] });
            }
        });
    };
    //TODO: change the hard-coded value
    //navigate to the conversation page from the selected message
    MessageListPage.prototype.itemTapped = function (item) {
        var otherPersonId = item;
        var conversation = this.conversations.filter(function (x) { return x.id === otherPersonId; })[0];
        console.log(otherPersonId);
        console.log(conversation.name);
        this.nav.push(messages_1.MessagesPage, {
            messages: conversation.messages,
            clientName: conversation.name
        });
    };
    MessageListPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/message-list/message-list.html',
            providers: [messages_service_1.MessagesService],
            pipes: [unread_messages_pipe_1.UnreadMessagesPipe, client_name_1.ClientNamePipe, received_messages_1.ReceivedMessagesPipe, date_1.DateCalendarPipe, limit_messages_1.MaxLengthPipe]
        })
    ], MessageListPage);
    return MessageListPage;
})();
exports.MessageListPage = MessageListPage;
//# sourceMappingURL=message-list.js.map