import { ManageDichVu } from "./../service/manageDichVu";
import { Admin } from "./../model/admin";
import { ManageAdmin } from "../service/manageAdmin";
import { ManagePC } from "../service/managePc";
import { DichVu } from "../model/dichvu";
import { User } from "../model/user";
import { ManageUser } from "../service/manageUser";

let input = require("readline-sync");
let listAdmin: ManageAdmin = new ManageAdmin();
let listPC: ManagePC = new ManagePC();
let listDichvu: ManageDichVu = new ManageDichVu();
let listUser :  ManageUser = new ManageUser()

function manHinhChinh() {
  let menu = `1. Dang nhap`;

  console.log(menu);
  let choice: number;
  let check = true;
  do {
    choice = +input.question("nhap lua chon cua ban :");
    switch (choice) {
      case 1:
        let admin: Admin = dangNhap();
        if (listAdmin.dangNhap(admin)) {
          check = false;
          menuChinh();
        }
        break;
    }
  } while (check);
}
function menuChinh() {
  let menu = `--------Menu-------
                    1.Hien thi danh sach may tinh
                    2.Them 1 may vao danh sach 
                    3.Sua doi thong tin may
                    4.Xoa 1 may khoi danh sach
                    5.Them dich vu
                    6.Chinh sua tinh tien theo gio
                    7.Tinh tien
                    8.Quan ly tai khoan dang nhap
                    9.Doanh thu`;
  console.log(menu);
  let choice: number;
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
      case 8 :
        quanLyNgDung()
        break  
    }
  } while (choice != 0);
}
function ShowAllPC() {
  listPC.showall();
}
function addPC() {
  let tenMay = input.question("nhap ten may can them ");
  listPC.add(tenMay);
}
function editInforPc() {
  let tenMay = input.question("nhap ten may can sua doi thong tin");
  listPC.edit(tenMay);
}
function remove() {
  let tenMay = input.question("nhap ten may can sua");
  listPC.remove(tenMay);
}

function dangNhap() {
  let taiKhoan = input.question("nhap tai khoan :  ");
  let matKhau = input.question("nhap mat khau ");
  let admin: Admin = new Admin(taiKhoan, matKhau);
  return admin;
}
function dichvu() {
  let menu = `  1. Them dich vu
                2. Xoa dich vu
                0. Thoat`;
  console.log(menu);
  let choice: number;
  do {
    choice = +input.question("nhap lua chon cua ban");
    switch (choice) {
      case 1:
        addDichVu();
        break;
      case 2 : 
      removeDichVu()
      break
      case 0 :  
      menuChinh()
      break 
    }
  } while (choice >= 0);
}
function addDichVu() {
  let id = +input.question("nhap ID : ");
  let name = input.question("nhap ten dich vu : ");
  let price = +input.question("nhap gia cua dich vu: ");
  let dichVu: DichVu = new DichVu(id, name, price);
  listDichvu.add(dichVu);
}
function removeDichVu() {
  let id = +input.question("nhap id Dich vu can xoa");
  listDichvu.removeDichvu(id);
}
function quanLyNgDung(){
        let menu = `1.Them tai khoan nguoi dung
                    2.Sua tai khoan nguoi dung
                    3.Xoa tai khoan nguoi dung
                    4.Hien thi danh sach nguoi dung
                    0.Thoat`
                    console.log(menu);
            let choice : number
            do {
                choice = +input.question('nhap lua chon')
                switch(choice){
                    case 1 :
                        addUser()
                        break
                    case 2 :
                        editUser()
                        break
                    case 3 :
                        removeUser()
                        break
                    case 4 : 
                    showListUser()   
                    break
                    case 0 :
                        menuChinh()
                        break
                }
                
            } while (choice >= 0);        
}
function addUser(){
    let username = input.question('nhap tai khoan')
    let password = input.question('nhap mat khau')
    let account  : User = new User(username,password)
    listUser.addUser(account)
}
function editUser(){
    let username = input.question('nhap tai khoan can sua ')
    listUser.editUser(username)

}
function removeUser(){
        let username = input.question('nhap tai khoan can xoa')
        listUser.removeUser(username)
}
function showListUser(){
        console.log(listUser.showUser());
}

function main() {
  manHinhChinh();
}
main();
