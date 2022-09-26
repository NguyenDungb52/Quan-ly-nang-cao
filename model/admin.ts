export class Admin {
    private taiKhoan : string
    private matKhau :string 
    private check? : boolean

    constructor(taiKhoan : string,matKhau :string, check? : boolean ) {
            this.taiKhoan = taiKhoan
            this.matKhau = matKhau    
    }   

    public getTaiKhoan(): string {
        return this.taiKhoan;
    }

    public setTaiKhoan(taiKhoan: string): void {
        this.taiKhoan = taiKhoan;
    }

    public getMatKhau(): string {
        return this.matKhau;
    }

    public setMatKhau(matKhau :string): void {
        this.matKhau = matKhau;
    }
    public getCheck() : any{
       
    }
    public setCheck(check : boolean) {
        this.check = check 
    }

}