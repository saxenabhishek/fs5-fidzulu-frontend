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
      '/assets/images/apple-watch.png',
      'Description for Apple Watch Series 7',
      5.0,
      599
    ),
    new Product(
      'Samsung Galaxy S21 Ultra 5G, Phantom Black',
      '/assets/images/samsung-s21.jpg',
      'Description for Samsung Galaxy S21 Ultra',
      4.8,
      1299
    ),
    new Product(
      'Sony WH-1000XM4 Wireless Noise-Canceling Headphones',
      '/assets/images/sony-headphones.webp',
      'Description for Sony WH-1000XM4',
      4.9,
      349
    ),
    new Product(
      'Dell XPS 13 Laptop, Intel Core i7, 16GB RAM, 512GB SSD',
      '/assets/images/dell-laptop.jpg',
      'Description for Dell XPS 13 Laptop',
      4.7,
      1399
    ),
    // Add more products here if needed
  ];
  constructor() {}

  getAllProducts(): Product[] {
    console.log(this.productList);
    return this.productList;
  }
}
