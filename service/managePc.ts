import { time } from "console";
import { DichVu } from "../model/dichvu";
import { PC } from "../model/pc";
let input = require("readline-sync");

export class ManagePC {
  listPC: PC[] = [];
  tien: any = 3000;
  tienan: any = 0;
  listDichVu: DichVu[] = [];

  constructor() {
    let time: Date = new Date();
    this.listPC.push(new PC("May 1", true, time));
    this.listPC.push(new PC("May 2", false, time));
    this.listPC.push(new PC("May 3", false, time));
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
    for (let i = 0; i < this.listPC.length; i++) {
      if (this.listPC[i].getStatus() === true) {
        let t: any = new Date();
        let time: any = this.listPC[i].getTime();

        let gioiChoi: any = Math.abs(t - time) / 3600000;
        let tien = Math.round(gioiChoi * this.tien);
        console.log(tien, " VND ");
      }
    }
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
  addDoAn(){
    for(let  i = 0; i< this.listDichVu.length;i++){
          this.listDichVu[i]
          console.log(this.listDichVu[i])
    }
  }
}
