import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Profile } from './pages/profile/profile';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Orders } from './pages/orders/orders';
import { LoginComponent } from './components/login/login';
import { SignupComponent } from './components/signup/signup';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: Products },
    { path: 'cart', component: Cart },
    { path: 'orders', component: Orders },
    { path: 'profile', component: Profile },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', component: PageNotFound }
];
