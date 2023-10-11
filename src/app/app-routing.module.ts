import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
