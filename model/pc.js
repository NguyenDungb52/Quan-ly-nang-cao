"use strict";
exports.__esModule = true;
exports.PC = void 0;
var PC = /** @class */ (function () {
    function PC(name, status, time) {
        this.name = name;
        this.status = status;
        this.time = time;
    }
    PC.prototype.getName = function () {
        return this.name;
    };
    PC.prototype.setName = function (name) {
        this.name = name;
    };
    PC.prototype.getStatus = function () {
        return this.status;
    };
    PC.prototype.setStatus = function (status) {
        this.status = status;
    };
    PC.prototype.getTime = function () {
        return this.time;
    };
    PC.prototype.setTime = function (time) {
        this.time = time;
    };
    return PC;
}());
exports.PC = PC;
