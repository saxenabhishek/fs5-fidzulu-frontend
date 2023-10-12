import { Component } from '@angular/core';
import { ProductService } from '../service/product-service.service';
import { Product } from 'src/app/model/product';
import { StarRatingComponent } from 'src/app/component/star-rating/star-rating.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: Product[] = [];
  productCategory?: string;
  country ?: string;

  constructor(private productService: ProductService,     private route: ActivatedRoute) {}

  ngOnInit() {
    this.productCategory = this.route.snapshot.paramMap.get('service') || '';
    this.country = this.route.snapshot.paramMap.get('country') || '';
    this.getAllProducts(this.productCategory, this.country);
  }

  getAllProducts(productCategory: string, country : string) {
    this.productService.getAllProducts(productCategory, country).subscribe((result) => {
      this.productList = result;
      this.productList = result.map((e, idx)=>{
        return {...e, idx:idx}
      })
      this.productService.setAllProducts(this.productList);
      console.log(this.productList);
    });
  }
}
