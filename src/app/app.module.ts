import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { ProductModule } from './product/product.module';
import { ErrorComponent } from './error/error.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
// import { StarRatingComponent } from './component/star-rating/star-rating.component';
// import { ProductListComponent } from './product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    LandingPageComponent,
    // StarRatingComponent,
    // ProductListComponent,
  ],
  imports: [BrowserModule, ProductModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
