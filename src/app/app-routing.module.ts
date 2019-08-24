import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { ErrorComponent } from './error/error.component';
import { GitReposComponent } from './git-repos/git-repos.component';

const routes: Routes = [
  {path: '', component: GitReposComponent, canActivate: [AuthGuard]},
  {path: 'error', component: ErrorComponent},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
