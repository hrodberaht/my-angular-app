export class Product {
    public name: string;
    public description: string;
    public price: number;
    public imgPath: string;
    
    constructor(name: string,description: string,price: number,imgPath: string){
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgPath = imgPath;
    }
}