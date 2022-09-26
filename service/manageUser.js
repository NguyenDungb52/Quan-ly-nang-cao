"use strict";
exports.__esModule = true;
exports.ManageUser = void 0;
var user_1 = require("../model/user");
var input = require("readline-sync");
var ManageUser = /** @class */ (function () {
    function ManageUser() {
        this.listUser = [];
    }
    ManageUser.prototype.addUser = function (t) {
        this.listUser.push(t);
    };
    ManageUser.prototype.editUser = function (t) {
        for (var i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].getUsername() == t) {
                var usernameNew = input.question('nhap tai khoan moi');
                var passwordNew = input.question('nhap mat khau moi ');
                var accountNew = new user_1.User(usernameNew, passwordNew);
                this.listUser.splice(i, 1, accountNew);
            }
        }
    };
    ManageUser.prototype.removeUser = function (t) {
        for (var i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].getUsername() == t) {
                this.listUser.splice(i, 1);
            }
        }
    };
    ManageUser.prototype.showUser = function () {
        return this.listUser;
    };
    return ManageUser;
}());
exports.ManageUser = ManageUser;
