"use strict";
exports.__esModule = true;
exports.ManageAdmin = void 0;
var admin_1 = require("./../model/admin");
var ManageAdmin = /** @class */ (function () {
    function ManageAdmin() {
        this.listAdmin = [];
        this.listAdmin.push(new admin_1.Admin('admin', 'admin', true));
        this.listAdmin.push(new admin_1.Admin('a', 'a', true));
    }
    ManageAdmin.prototype.dangNhap = function (t) {
        for (var i = 0; i < this.listAdmin.length; i++) {
            if (this.listAdmin[i].getMatKhau() == t.getMatKhau() && this.listAdmin[i].getTaiKhoan() == t.getTaiKhoan()) {
                console.log('dang nhap thanh cong');
                return this.listAdmin[i].getTaiKhoan();
            }
        }
        console.log('sai tai khoan hoac mat khau. Xin moi nhap lai');
        return;
    };
    return ManageAdmin;
}());
exports.ManageAdmin = ManageAdmin;
