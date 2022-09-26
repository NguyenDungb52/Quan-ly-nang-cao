import { DichVu } from './../model/dichvu';
export class ManageDichVu {
    listDichVu : DichVu[] = []


    add(t : DichVu){
        this.listDichVu.push(t)
    }
    removeDichvu( t : number){
        for(let i = 0 ; i<this.listDichVu.length; i++){
            if(this.listDichVu[i].getId() == t){
                    this.listDichVu.splice(i,1)
            }
        }
        return this.listDichVu
    }

}