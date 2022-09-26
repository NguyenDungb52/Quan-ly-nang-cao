"use strict";
exports.__esModule = true;
var admin_1 = require("./../model/admin");
var manageAdmin_1 = require("../service/manageAdmin");
var managePc_1 = require("../service/managePc");
var dichvu_1 = require("../model/dichvu");
var user_1 = require("../model/user");
var manageUser_1 = require("../service/manageUser");
var input = require("readline-sync");
var listAdmin = new manageAdmin_1.ManageAdmin();
var listPC = new managePc_1.ManagePC();
var listUser = new manageUser_1.ManageUser();
function manHinhChinh() {
    var menu = "1. Dang nhap";
    console.log(menu);
    var choice;
    do {
        choice = +input.question("nhap lua chon cua ban :");
        switch (choice) {
            case 1:
                var admin = dangNhap();
                console.log(admin);
                if (listAdmin.dangNhap(admin) === "admin") {
                    menuChinh();
                }
                else {
                    menuNguoiDung();
                }
                break;
        }
    } while (choice);
}
function menuNguoiDung() {
    var menu = "------MENU-------\n      1. Do an\n      2. Do uong ";
    console.log(menu);
    var choice;
    do {
        choice = input.question("nhap lua chon cua ban :");
        switch (choice) {
            case 1:
                doAn();
                break;
            case 2:
                // doUong();
                break;
        }
    } while (choice >= 0);
}
function doAn() {
    listPC.addDoAn();
}
function menuChinh() {
    var menu = "--------Menu-------\n                    1.Hien thi danh sach may tinh\n                    2.Them 1 may vao danh sach \n                    3.Sua doi thong tin may\n                    4.Xoa 1 may khoi danh sach\n                    5.Them dich vu\n                    6.Chinh sua tinh tien theo gio\n                    7.Tinh tien\n                    8.Quan ly tai khoan dang nhap\n                    9.Doanh thu";
    console.log(menu);
    var choice;
    do {
        choice = +input.question("nhap lua chon : ");
        switch (choice) {
            case 1:
                ShowAllPC();
                break;
            case 2:
                addPC();
                break;
            case 3:
                editInforPc();
                break;
            case 4:
                remove();
                break;
            case 5:
                dichvu();
                break;
            case 6:
                chinhSuaTienTheoH();
                break;
            case 7:
                tinhTientheoH();
                break;
            case 8:
                quanLyNgDung();
                break;
        }
    } while (choice != 0);
}
function ShowAllPC() {
    listPC.showall();
}
function addPC() {
    var tenMay = input.question("nhap ten may can them ");
    listPC.add(tenMay);
}
function editInforPc() {
    var tenMay = input.question("nhap ten may can sua doi thong tin");
    listPC.edit(tenMay);
}
function remove() {
    var tenMay = input.question("nhap ten may can sua");
    listPC.remove(tenMay);
}
function dangNhap() {
    var taiKhoan = input.question("nhap tai khoan :  ");
    var matKhau = input.question("nhap mat khau ");
    var admin = new admin_1.Admin(taiKhoan, matKhau);
    return admin;
}
function dichvu() {
    var menu = "  1. Them dich vu\n                2. Xoa dich vu\n                0. Thoat";
    console.log(menu);
    var choice;
    do {
        choice = +input.question("nhap lua chon cua ban");
        switch (choice) {
            case 1:
                addDichVu();
                break;
            case 2:
                removeDichVu();
                break;
            case 0:
                menuChinh();
                break;
        }
    } while (choice >= 0);
}
function addDichVu() {
    var id = +input.question("nhap ID : ");
    var name = input.question("nhap ten dich vu : ");
    var price = +input.question("nhap gia cua dich vu: ");
    var dichVu = new dichvu_1.DichVu(id, name, price);
    listPC.addDichVu(dichVu);
}
function removeDichVu() {
    var id = +input.question("nhap id Dich vu can xoa");
    listPC.removeDichvu(id);
}
function quanLyNgDung() {
    var menu = "1.Them tai khoan nguoi dung\n                    2.Sua tai khoan nguoi dung\n                    3.Xoa tai khoan nguoi dung\n                    4.Hien thi danh sach nguoi dung\n                    0.Thoat";
    console.log(menu);
    var choice;
    do {
        choice = +input.question("nhap lua chon");
        switch (choice) {
            case 1:
                addUser();
                break;
            case 2:
                editUser();
                break;
            case 3:
                removeUser();
                break;
            case 4:
                showListUser();
                break;
            case 0:
                menuChinh();
                break;
        }
    } while (choice >= 0);
}
function addUser() {
    var username = input.question("nhap tai khoan");
    var password = input.question("nhap mat khau");
    var account = new user_1.User(username, password);
    listUser.addUser(account);
}
function editUser() {
    var username = input.question("nhap tai khoan can sua ");
    listUser.editUser(username);
}
function removeUser() {
    var username = input.question("nhap tai khoan can xoa");
    listUser.removeUser(username);
}
function showListUser() {
    console.log(listUser.showUser());
}
function tinhTientheoH() {
    listPC.tinhTienNet();
}
function chinhSuaTienTheoH() {
    var tien = +input.question("nhap so tien sua theo 1  gio ");
    listPC.editTien(tien);
}
function main() {
    manHinhChinh();
}
main();
