import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AngularClrModule } from '../angular-clr.module';
import { AngularMaterialModule } from '../angular-material.module';
import { DetailsComponent } from './details/details.component';
import { GitReposRoutingModule } from './git-repos-routing.module';
import { GitReposComponent } from './git-repos.component';


@NgModule({
  declarations: [GitReposComponent, DetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    GitReposRoutingModule,
    AngularClrModule,
    AngularMaterialModule
  ]
})
export class GitReposModule {}
