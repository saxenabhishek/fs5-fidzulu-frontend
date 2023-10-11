export class Product {
  constructor(
    // public id:String,
    public title: string,
    public imageUrl: string,
    public description: string,
    public rating: number,
    public price: number
  ) {}
  toString(): String {
    return JSON.stringify(this);
  }
}
