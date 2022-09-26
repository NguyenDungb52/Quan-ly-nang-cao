"use strict";
exports.__esModule = true;
exports.ManagePC = void 0;
var pc_1 = require("../model/pc");
var input = require("readline-sync");
var ManagePC = /** @class */ (function () {
    function ManagePC() {
        this.listPC = [];
        this.tien = 3000;
        this.tienan = 0;
        this.listDichVu = [];
        var time = new Date();
        this.listPC.push(new pc_1.PC("May 1", true, time));
        this.listPC.push(new pc_1.PC("May 2", false, time));
        this.listPC.push(new pc_1.PC("May 3", false, time));
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
        for (var i = 0; i < this.listPC.length; i++) {
            if (this.listPC[i].getStatus() === true) {
                var t = new Date();
                var time_1 = this.listPC[i].getTime();
                var gioiChoi = Math.abs(t - time_1) / 3600000;
                var tien = Math.round(gioiChoi * this.tien);
                console.log(tien, " VND ");
            }
        }
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
    ManagePC.prototype.addDoAn = function () {
        for (var i = 0; i < this.listDichVu.length; i++) {
            this.listDichVu[i];
            console.log(this.listDichVu[i]);
        }
    };
    return ManagePC;
}());
exports.ManagePC = ManagePC;
