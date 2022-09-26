import { Admin } from './../model/admin';


export class ManageAdmin {
    listAdmin : Admin [] = []
constructor() {
    this.listAdmin.push(new Admin('admin','admin'))
}

   
    

    dangNhap(t : Admin): boolean{
        let check = true
        for(let  i = 0; i < this.listAdmin.length; i++){
            if(this.listAdmin[i].getMatKhau()== t.getMatKhau() && this.listAdmin[i].getTaiKhoan()== t.getTaiKhoan()){
                console.log('dang nhap thanh cong');
                return check;
            }
        }
        console.log('sai tai khoan hoac mat khau. Xin moi nhap lai'); 
        return !check;
    }
}