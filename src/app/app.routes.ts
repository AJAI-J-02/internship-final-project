import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';
import { Users } from './pages/users/users';
import { About } from './pages/about/about';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:Home},
    {path:'product',component:Product},
    {path:'contact',component:Contact},
    {path:'users',component:Users},
    {path:'about',component:About},
];
