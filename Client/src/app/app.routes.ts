import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AuthGuard } from './core/security/auth.guard';
import { AdminGuard } from './core/security/admin.guard';
import { AccountLayoutComponent } from './pages/account-management/account-layout/account-layout.component';
import { AccountInformationComponent } from './pages/account-management/account-information/account-information.component';
import { AccountPasskeysComponent } from './pages/account-management/passkeys/account-passkeys.component';
import { AdminUsersPageComponent } from './pages/admin/users/admin-users-page.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'account',
    component: AccountLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'information', component: AccountInformationComponent },
      { path: 'passkeys', component: AccountPasskeysComponent },
      { path: '', redirectTo: 'information', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: 'users', component: AdminUsersPageComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
];
