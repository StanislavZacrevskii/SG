import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        canActivate: [],
        data: {
            meta: {
                title: 'Home page',
                description: 'Home page'
            }
        }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [],
        data: {
            meta: {
                title: 'Profile',
                description: 'Profile'
            }
        }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
