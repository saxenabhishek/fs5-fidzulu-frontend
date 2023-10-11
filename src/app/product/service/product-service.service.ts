import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[] = [
    new Product(
      'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
      'https://res.cloudinary.com/dzs2aqnyc/image/upload/v1696997744/fidzulu/yen9zcqmns7s2twhzni4.png',
      'Description for Apple Watch Series 7',
      5.0,
      599
    ),
    new Product(
      'Samsung Galaxy S21 Ultra 5G, Phantom Black',
      'https://res.cloudinary.com/dzs2aqnyc/image/upload/v1696997743/fidzulu/owz8jrfvlmiew14cttft.jpg',
      'Description for Samsung Galaxy S21 Ultra',
      4.8,
      1299
    ),
    new Product(
      'Sony WH-1000XM4 Wireless Noise-Canceling Headphones',
      'https://res.cloudinary.com/dzs2aqnyc/image/upload/v1696997743/fidzulu/kq7vyxwgzu6ngqvr3paw.webp',
      'Description for Sony WH-1000XM4',
      4.9,
      349
    ),
    new Product(
      'Dell XPS 13 Laptop, Intel Core i7, 16GB RAM, 512GB SSD',
      'https://res.cloudinary.com/dzs2aqnyc/image/upload/v1696997743/fidzulu/eqs6wkjzwkufq78azjz8.jpg',
      'Description for Dell XPS 13 Laptop',
      4,
      1399
    ),
    new Product(
      'Dell XPS 13 Laptop, Intel Core i7, 16GB RAM, 512GB SSD',
      'https://res.cloudinary.com/dzs2aqnyc/image/upload/v1696997743/fidzulu/eqs6wkjzwkufq78azjz8.jpg',
      'Description for Dell XPS 13 Laptop',
      4.7,
      1399
    ),
    new Product(
      'Vincent-Chair-Walnut-Angle',
      'https://res.cloudinary.com/dzs2aqnyc/image/upload/v1697002914/fidzulu/cy5vn3bwlpn9hewge3fn.webp',
      "Elevate your living space with the timeless sophistication of the Vincent Chair in Walnut Angle. This exquisite piece of furniture combines form and function, making it the perfect addition to any contemporary home or office setting. The Vincent Chair boasts a sleek and modern design that effortlessly complements a wide range of interior styles. Crafted with precision, the chair's angular frame in rich walnut finish exudes warmth and character, while its clean lines and minimalist silhouette create a sense of refined simplicity.",
      4.9,
      349
    ),
    // Add more products here if needed
  ];
  constructor() {}

  getAllProducts(): Product[] {
    console.log(this.productList);
    return this.productList;
  }
}
