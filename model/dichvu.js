"use strict";
exports.__esModule = true;
exports.DichVu = void 0;
var DichVu = /** @class */ (function () {
    function DichVu(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    DichVu.prototype.getId = function () {
        return this.id;
    };
    DichVu.prototype.setId = function (id) {
        this.id = id;
    };
    DichVu.prototype.getName = function () {
        return this.name;
    };
    DichVu.prototype.setName = function (name) {
        this.name = name;
    };
    DichVu.prototype.getPrice = function () {
        return this.price;
    };
    DichVu.prototype.setPrice = function (price) {
        this.price = price;
    };
    return DichVu;
}());
exports.DichVu = DichVu;
