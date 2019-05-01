import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AngularClrModule} from 'src/app/angular-clr.module';
import {GitReposRoutingModule} from 'src/app/git-repos/git-repos-routing.module';
import {GitReposComponent} from 'src/app/git-repos/git-repos.component';
import {DetailsComponent} from './details/details.component';


@NgModule({
  declarations: [GitReposComponent, DetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    GitReposRoutingModule,
    AngularClrModule
  ]
})
export class GitReposModule {}
