import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GitReposComponent} from 'src/app/git-repos/git-repos.component';

const routes: Routes = [
  {path: '', component: GitReposComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
