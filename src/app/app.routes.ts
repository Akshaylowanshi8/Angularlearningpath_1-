import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [

{path:" ",redirectTo:"login", pathMatch:'full'},
{path:"login",component:LoginformComponent},
{path:"home",component:HomeComponent,canActivate:[authGuard]},
{path:"about",component:AboutComponent,canActivate:[authGuard]},
{path:"contect",component:ContectComponent},
{path:"shop",component:ShopComponent},
{path:"home/shop",component:ShopComponent},
];




