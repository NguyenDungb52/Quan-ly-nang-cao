export class PC {
    private name  : string
    private status : boolean
    private time : Date


 

    constructor(name : string, status : boolean,time : Date) {
        this.name = name
        this.status = status
        this.time = time
    }
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getStatus() : boolean{
            return this.status
    }
    public setStatus( status : boolean) : void{
            this.status = status
    }
    public getTime() :Date{
        return this.time
    }
    public setTime( time : Date) :void {
            this.time = time
    }


}