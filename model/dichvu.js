"use strict";
exports.__esModule = true;
exports.DichVu = void 0;
var DichVu = /** @class */ (function () {
    function DichVu(id, name, price, danhMuc, soLuong) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.danhMuc = danhMuc;
        this.soLuong = soLuong;
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
    DichVu.prototype.getDanhMuc = function () {
        return this.danhMuc;
    };
    DichVu.prototype.setDanhMuc = function (danhMuc) {
        this.danhMuc = danhMuc;
    };
    DichVu.prototype.getSoLuong = function () {
        return this.soLuong;
    };
    DichVu.prototype.setSoLuong = function (soLuong) {
        this.soLuong = soLuong;
    };
    return DichVu;
}());
exports.DichVu = DichVu;
