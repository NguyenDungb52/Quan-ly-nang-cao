import { time } from "console";
import { DichVu } from "../model/dichvu";
import { PC } from "../model/pc";
let input = require("readline-sync");

export class ManagePC {
  listPC: PC[] = [];
  tien: any = 3000;
  tienan: any = 0;
  listDichVu: DichVu[] = [];
  order: any = [];

  constructor() {
    let time: Date = new Date();
    this.listPC.push(new PC("May 1", true, time));
    this.listPC.push(new PC("May 2", false, time));
    this.listPC.push(new PC("May 3", false, time));

    this.listDichVu.push(new DichVu(1, "Bim Bim", 5000, "do an", 100));
  }

  add(t: PC) {
    this.listPC.push(t);
  }
  edit(t: PC) {
    for (let i = 0; i < this.listPC.length; i++) {
      let tenMayMoi = input.question("nhap ten may moi");
      this.listPC.splice(i, 1, tenMayMoi);
    }
    console.log(this.listPC);
  }
  remove(t: PC) {
    for (let i = 0; i < this.listPC.length; i++) {
      this.listPC.splice(i, 1);
    }
  }

  showall() {
    return this.listPC;
  }
  editTien(t: number) {
    this.tien = t;
    console.log(this.tien);
  }
  tienAn(t: any) {
    this.tienan = t;
    console.log(this.tienan);
  }
  tinhTienNet() {
    let tiennet: number = 0;
    let tienOrder: number = 0;
    for (let i = 0; i < this.listPC.length; i++) {
      if (this.listPC[i].getStatus() === true) {
        let t: any = new Date();
        let time: any = this.listPC[i].getTime();

        let gioiChoi: any = Math.abs(t - time) / 3600000;
        tiennet = Math.round(gioiChoi * this.tien);
      }
    }
    if (this.order.length > 0) {
      for (let j = 0; j < this.order.length; j++) {
        tienOrder = this.order[j].name.price*this.order[j].quantity
      }
    }
    let tongTien = tiennet + tienOrder;
    console.log('tien net : ',tiennet)
    console.log('tien order : ',tienOrder)
    console.log('tong tien : ', tongTien)

  }
  addDichVu(t: DichVu) {
    this.listDichVu.push(t);
  }
  removeDichvu(t: number) {
    for (let i = 0; i < this.listDichVu.length; i++) {
      if (this.listDichVu[i].getId() == t) {
        this.listDichVu.splice(i, 1);
      }
    }
    return this.listDichVu;
  }
  addProduct() {
    console.log("--menu--");
    for (let i = 0; i < this.listDichVu.length; i++) {
      console.log(`
        ${i + 1}. ${this.listDichVu[i].getName()}, gia ${this.listDichVu[
        i
      ].getPrice()}  VND
        `);
    }
    let choice = +input.question("nhap lua chon");
    do {
      let quantity = +input.question("nhap so luong can mua");
      let newOder = {
        name: this.listDichVu[choice - 1],
        quantity: quantity,
      };
      this.order.push(newOder);
    } while (choice < 0);
  }
}
