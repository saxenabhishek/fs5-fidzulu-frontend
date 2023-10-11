import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarRatingComponent } from '../component/star-rating/star-rating.component';

@NgModule({
  declarations: [ProductListComponent, StarRatingComponent, ProductDetailComponent],
  imports: [CommonModule, ProductRoutingModule],
  exports: [ProductListComponent, ProductDetailComponent],
})
export class ProductModule {}
