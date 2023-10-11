import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch:"full"},
  {
    path: "products",
    loadChildren: () =>
      import("./product/product.module").then((mod) => mod.ProductModule),
  },

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
