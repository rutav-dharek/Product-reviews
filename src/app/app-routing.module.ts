import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UIHelperComponent }   from './uihelper.component';
import { ProductsComponent }      from './products.component';
import { ProductDetailComponent }  from './product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'products',     component: ProductsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

