import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductByName(
    productCategory: String,
    productName: String
  ): Product | undefined {
    return this.productList.find(
      (product) => product.ModelName === productName
    );
  }
  productList: Product[] = [];

  API_URL = 'http://127.0.0.1:3022/classB/laptops/all/US-NC';
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.API_URL}`);
  }
}
