import { Component } from '@angular/core';
import { ProductService } from '../service/product-service.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: Product[] = [];
  constructor(private productService: ProductService) {}
}
