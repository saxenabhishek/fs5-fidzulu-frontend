import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from '../component/star-rating/star-rating.component';

@NgModule({
  declarations: [ProductListComponent, StarRatingComponent],
  imports: [CommonModule, ProductRoutingModule],
  exports: [ProductListComponent],
})
export class ProductModule {}
