import { User } from "../model/user";

let input = require("readline-sync");

export class ManageUser {
    listUser : User [] = []

    addUser(t : User){
        this.listUser.push(t)
    }
    editUser(t : string){
        for( let i = 0; i<this.listUser.length;i++){
            if(this.listUser[i].getUsername() == t ){
                let usernameNew = input.question('nhap tai khoan moi')
                let passwordNew = input.question('nhap mat khau moi ')
                let accountNew = new User(usernameNew,passwordNew )
                this.listUser.splice(i,1,accountNew)
            }
        }
    }
    removeUser(t : string ){
            for(let i = 0; i<this.listUser.length;i++){
                if(this.listUser[i].getUsername()== t){
                    this.listUser.splice(i,1)
                }
            }
    }
    showUser(){
        return this.listUser
    }


}