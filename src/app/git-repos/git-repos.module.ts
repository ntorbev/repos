import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {GitReposComponent} from 'src/app/git-repos/git-repos.component';


@NgModule({
  declarations: [GitReposComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class GitReposModule {}
