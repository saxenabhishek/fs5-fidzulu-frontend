import { Component } from '@angular/core';
import { ProductService } from '../service/product-service.service';
import { Product } from 'src/app/model/product';
import { StarRatingComponent } from 'src/app/component/star-rating/star-rating.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((result) => {
      this.productList = result.body;
      console.log(this.productList);
    });
  }
}
