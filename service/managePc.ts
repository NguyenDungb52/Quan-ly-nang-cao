import { PC } from "../model/pc";
let input = require("readline-sync");

export class ManagePC{
    listPC : PC [] = []
    constructor() {
        this.listPC.push(new PC ('May 1'))
        this.listPC.push(new PC ('May 2'))
        this.listPC.push(new PC ('May 3'))
    }
    add(t : PC){
        this.listPC.push(t)
    }
    edit(t : PC ){
        for(let i = 0; i< this.listPC.length ; i++){
            let tenMayMoi  = input.question('nhap ten may moi')
            this.listPC.splice(i,1,tenMayMoi)
        }
        console.log(this.listPC);
    }
    remove(t : PC){
            for(let i = 0; i< this.listPC.length;i++){
                this.listPC.splice(i,1)
            }
    }

    showall(){
        return this.listPC
    }


}