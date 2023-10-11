import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductModule } from './product/product.module';
// import { StarRatingComponent } from './component/star-rating/star-rating.component';
// import { ProductListComponent } from './product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // StarRatingComponent,
    // ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
