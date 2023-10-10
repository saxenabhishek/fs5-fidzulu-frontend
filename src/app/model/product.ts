export class Product {
  constructor(
    title: string,
    imageUrl: string,
    description: string,
    rating: number,
    price: number
  ) {}
  toString(): String {
    return JSON.stringify(this);
  }
}
