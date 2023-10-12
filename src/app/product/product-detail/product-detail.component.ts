import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product-service.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  productIdx?: String;
  productCategory?: String;

  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productIdx = this.route.snapshot.paramMap.get('name') || '';
    this.productCategory = this.route.snapshot.paramMap.get('service') || '';
    // this.product = this.productService.getAllProducts()[3]
    this.product = this.productService.getProductByName(
      this.productCategory,
      this.productIdx
    );
    console.debug(this.product)
  }
}
