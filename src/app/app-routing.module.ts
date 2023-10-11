import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes),
    CommonModule, MatCardModule
  ]
})
export class AppRoutingModule { }
