import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { detailComponent } from './detail/detail.component';
import { pageNotFound } from './page-not-found/page-not-found.component';
import { PassValueParent } from './pass-value/pass-parent/pass-parent.component';
import { ShoppingCard } from './demo-shoping-card/product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: detailComponent },
    { path: 'pass-value-parent', component: PassValueParent },
    { path: 'shopping-card', component: ShoppingCard },
    { path: '**', component: pageNotFound }
];
