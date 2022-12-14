"use strict";
exports.__esModule = true;
exports.ManagePC = void 0;
var dichvu_1 = require("../model/dichvu");
var pc_1 = require("../model/pc");
var input = require("readline-sync");
var ManagePC = /** @class */ (function () {
    function ManagePC() {
        this.listPC = [];
        this.tien = 3000;
        this.tienan = 0;
        this.listDichVu = [];
        this.order = [];
        var time = new Date();
        this.listPC.push(new pc_1.PC("May 1", true, time));
        this.listPC.push(new pc_1.PC("May 2", false, time));
        this.listPC.push(new pc_1.PC("May 3", false, time));
        this.listDichVu.push(new dichvu_1.DichVu(1, "Bim Bim", 5000, "do an", 100));
    }
    ManagePC.prototype.add = function (t) {
        this.listPC.push(t);
    };
    ManagePC.prototype.edit = function (t) {
        for (var i = 0; i < this.listPC.length; i++) {
            var tenMayMoi = input.question("nhap ten may moi");
            this.listPC.splice(i, 1, tenMayMoi);
        }
        console.log(this.listPC);
    };
    ManagePC.prototype.remove = function (t) {
        for (var i = 0; i < this.listPC.length; i++) {
            this.listPC.splice(i, 1);
        }
    };
    ManagePC.prototype.showall = function () {
        return this.listPC;
    };
    ManagePC.prototype.editTien = function (t) {
        this.tien = t;
        console.log(this.tien);
    };
    ManagePC.prototype.tienAn = function (t) {
        this.tienan = t;
        console.log(this.tienan);
    };
    ManagePC.prototype.tinhTienNet = function () {
        var tiennet = 0;
        var tienOrder = 0;
        for (var i = 0; i < this.listPC.length; i++) {
            if (this.listPC[i].getStatus() === true) {
                var t = new Date();
                var time_1 = this.listPC[i].getTime();
                var gioiChoi = Math.abs(t - time_1) / 3600000;
                tiennet = Math.round(gioiChoi * this.tien);
            }
        }
        if (this.order.length > 0) {
            for (var j = 0; j < this.order.length; j++) {
                tienOrder = this.order[j].name.price * this.order[j].quantity;
            }
        }
        var tongTien = tiennet + tienOrder;
        console.log('tien net : ', tiennet);
        console.log('tien net : ', tienOrder);
        console.log('tong tien : ', tongTien);
    };
    ManagePC.prototype.addDichVu = function (t) {
        this.listDichVu.push(t);
    };
    ManagePC.prototype.removeDichvu = function (t) {
        for (var i = 0; i < this.listDichVu.length; i++) {
            if (this.listDichVu[i].getId() == t) {
                this.listDichVu.splice(i, 1);
            }
        }
        return this.listDichVu;
    };
    ManagePC.prototype.addProduct = function () {
        console.log("--menu--");
        for (var i = 0; i < this.listDichVu.length; i++) {
            console.log("\n        ".concat(i + 1, ". ").concat(this.listDichVu[i].getName(), ", gia ").concat(this.listDichVu[i].getPrice(), "  VND\n        "));
        }
        var choice = +input.question("nhap lua chon");
        do {
            var quantity = +input.question("nhap so luong can mua");
            var newOder = {
                name: this.listDichVu[choice - 1],
                quantity: quantity
            };
            this.order.push(newOder);
        } while (choice < 0);
    };
    return ManagePC;
}());
exports.ManagePC = ManagePC;
