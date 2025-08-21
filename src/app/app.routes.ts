import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Profile } from './pages/profile/profile';
import { Auth } from './pages/auth/auth';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Orders } from './pages/orders/orders';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: Products },
    { path: 'cart', component: Cart },
    { path: 'orders', component: Orders },
    { path: 'profile', component: Profile },
    { path: 'login', component: Auth },
    { path: 'signup', component: Auth },
    { path: '**', component: PageNotFound }
];
