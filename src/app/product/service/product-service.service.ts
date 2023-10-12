import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
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

  API_URL =
    'http://ec2-43-205-242-183.ap-south-1.compute.amazonaws.com:3021/classA/food/all/IE';
  constructor(private httpClient: HttpClient) {}

  getAllProducts(category: string = '', country : string = 'IE'): Observable<Product[]> {
    console.log(category);
    const api_urls = [
      {
        name: 'food',
        url: `http://ec2-43-205-242-183.ap-south-1.compute.amazonaws.com:3021/classA/food/all/${country}`,
      },
      {
        name: 'laptops',
        url: `http://ec2-43-205-242-183.ap-south-1.compute.amazonaws.com:3022/classB/laptops/all/${country}`,
      },
      {
        name: 'books',
        url: `http://ec2-43-205-242-183.ap-south-1.compute.amazonaws.com:3022/classB/books/all/${country}`,
      },
      {
        name: 'bikes',
        url: `http://ec2-43-205-242-183.ap-south-1.compute.amazonaws.com:3021/classA/bikes/all/${country}`,
      },
      {
        name: 'dvds',
        url: `http://ec2-43-205-242-183.ap-south-1.compute.amazonaws.com:3022/classB/dvds/all/${country}`,
      },
      {
        name: 'toys',
        url: `http://ec2-43-205-242-183.ap-south-1.compute.amazonaws.com:3021/classA/toys/all/${country}`,
      },
    ];
    let actual_Url = api_urls.filter((url) => url.name == category);
    if (actual_Url.length == 0) {
      actual_Url = [
        {
          name: 'food',
          url: 'http://ec2-43-205-242-183.ap-south-1.compute.amazonaws.com:3021/classA/food/all/IE',
        },
       
      ];
    }
    return this.httpClient.get<Product[] >(`${actual_Url[0].url}`).pipe((response)=>{
      if(response== null){
        return of([]);
      }
      return response;
    });
  }
}
