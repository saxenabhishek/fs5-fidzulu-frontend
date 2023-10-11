import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import {MatCardModule} from '@angular/material/card';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: '', component: LandingPageComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./product/product.module').then((mod) => mod.ProductModule),
  },
  { path: '**', component: ErrorComponent },
];

// configures NgModule imports and exports
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes),
    CommonModule, MatCardModule
  ]
})
export class AppRoutingModule {}
