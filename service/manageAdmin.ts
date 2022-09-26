import { Admin } from './../model/admin';


export class ManageAdmin {
    listAdmin : Admin [] = []
constructor() {
    this.listAdmin.push(new Admin('admin','admin',true))
    this.listAdmin.push(new Admin('a','a',true))
}

   
    dangNhap(t : Admin){
   
        for(let  i = 0; i < this.listAdmin.length; i++){
            if(this.listAdmin[i].getMatKhau()== t.getMatKhau() && this.listAdmin[i].getTaiKhoan()== t.getTaiKhoan()){
                console.log('dang nhap thanh cong');
                return  this.listAdmin[i].getTaiKhoan();
            }
        }
        console.log('sai tai khoan hoac mat khau. Xin moi nhap lai'); 
        return ;
    }
}