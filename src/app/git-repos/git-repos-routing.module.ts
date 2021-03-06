import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { ReposDetailsResolver } from './repos-details.resolver';

const routes: Routes = [
  {
    path: 'repos/details',
    component: DetailsComponent,
    resolve: {
      readmeAndCommits: ReposDetailsResolver
    },
    data: { path: 'repos/details/:repo' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GitReposRoutingModule {
}
