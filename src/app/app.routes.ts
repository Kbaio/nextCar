import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { CreatePostPageComponent } from './nextCar/pages/create-post-page/create-post-page.component';
import { EditarPostComponent } from './nextCar/pages/editar-post/editar-post.component';
import { LandingPageComponent } from './nextCar/pages/landing-page/landing-page.component';
import { LayoutPageComponent } from './nextCar/pages/layout-page/layout-page.component';
import { ProductListPageComponent } from './nextCar/pages/product-list-page/product-list-page.component';
import { ProductPageComponent } from './nextCar/pages/product-page/product-page.component';
import { ProfilePageComponent } from './nextCar/pages/profile-page/profile-page.component';
import { WishlistPageComponent } from './nextCar/pages/wishlist-page/wishlist-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        component: LayoutPageComponent,
        children: [
            { path: 'landing', component: LandingPageComponent },
            { path: 'product-list', component: ProductListPageComponent },
            { path: 'product-list/:id', component: ProductPageComponent },
            { path: 'wishlist', component:EditarPostComponent  },
            { path: 'profile', component: ProfilePageComponent },
            { path: 'create-post', component: CreatePostPageComponent },
            { path: '**', redirectTo: 'landing',  }, 
        ]
    },
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },
    {
        path: '404',
        component: Error404PageComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '404',
    }
];
