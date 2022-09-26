"use strict";
exports.__esModule = true;
exports.Admin = void 0;
var Admin = /** @class */ (function () {
    function Admin(taiKhoan, matKhau, check) {
        this.taiKhoan = taiKhoan;
        this.matKhau = matKhau;
    }
    Admin.prototype.getTaiKhoan = function () {
        return this.taiKhoan;
    };
    Admin.prototype.setTaiKhoan = function (taiKhoan) {
        this.taiKhoan = taiKhoan;
    };
    Admin.prototype.getMatKhau = function () {
        return this.matKhau;
    };
    Admin.prototype.setMatKhau = function (matKhau) {
        this.matKhau = matKhau;
    };
    Admin.prototype.getCheck = function () {
    };
    Admin.prototype.setCheck = function (check) {
        this.check = check;
    };
    return Admin;
}());
exports.Admin = Admin;
