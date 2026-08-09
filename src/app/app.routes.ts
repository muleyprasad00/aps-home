import { Routes } from '@angular/router';
import { authGuard } from 'aps-common-ui';
import { LoginComponent } from 'aps-common-ui';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'landing',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./components/landing/landing').then(m => m.Landing)
    },
    {
        path: '**',
        redirectTo: 'landing',
    }
];