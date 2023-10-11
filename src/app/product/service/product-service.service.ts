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

  CLASSA_API_URL = "http://ec2-54-227-47-69.compute-1.amazonaws.com:3021/classA/food/all/US-NC"
  CLASSB_API_URL = "http://ec2-54-227-47-69.compute-1.amazonaws.com:3021/classB/laptops/all/US-NC"
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<responseType> {
    return this.httpClient.get<responseType>(`${this.CLASSA_API_URL}`);
  } 
}

interface responseType{
  success:Boolean, message:String, body:Product[]
}