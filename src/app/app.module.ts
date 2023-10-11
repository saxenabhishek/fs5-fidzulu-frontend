import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { TeamMemberCardComponent } from './component/team-member-card/team-member-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from '@coreui/angular';

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
    AboutUsComponent,
    TeamMemberCardComponent,
    TeamMemberCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatNativeDateModule,
    MatRippleModule,
    MatListModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatCardModule,
    MatNativeDateModule,
    MatRippleModule,
    MatIconModule,
    CarouselModule,
    ProductModule,
    ErrorComponent,
    LandingPageComponent,
    // StarRatingComponent,
    // ProductListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
