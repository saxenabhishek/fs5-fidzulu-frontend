import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product-service.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  productName?:String;
  service?: string;

  product?:Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(){
    this.productName = this.route.snapshot.paramMap.get('name') || "";
    this.service = this.route.snapshot.paramMap.get('service') || "";
    this.product = this.productService.getAllProducts()[3]
  }

}
