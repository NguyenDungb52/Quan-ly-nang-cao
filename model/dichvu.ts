export class DichVu {
    private id : number
    private  name : string
    private  price :number

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

    constructor(id :number, name : string,  price :number) {
        this.id = id 
        this.name = name
        this.price = price 
    }
}