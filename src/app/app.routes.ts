import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';


const routes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  {   path:'products', component: ProductsComponent}
];

export const routing = RouterModule.forRoot(routes);
