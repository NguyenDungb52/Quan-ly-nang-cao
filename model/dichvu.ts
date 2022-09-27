export class DichVu {
    private id : number
    private  name : string
    private  price :number
    private danhMuc : string
    private soLuong : number

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice():number {
        return this.price;
    }

    public setPrice(price :number): void {
        this.price = price;
    }
    public getDanhMuc() : string{
        return this.danhMuc
    }
    public setDanhMuc(danhMuc : string) :void {
        this.danhMuc = danhMuc
    }
    public getSoLuong() : number {
        return this.soLuong 
    }
    public setSoLuong(soLuong : number) : void {
        this.soLuong = soLuong
    }

    constructor(id :number, name : string,  price :number,danhMuc : string,soLuong : number) {
        this.id = id 
        this.name = name
        this.price = price 
        this.danhMuc = danhMuc
        this.soLuong = soLuong
    }
}