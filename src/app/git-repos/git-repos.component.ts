import {Component, OnInit} from '@angular/core';
import {ClrDatagridStringFilterInterface} from '@clr/angular';
import {Subscription} from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { Repos } from './git-repos.model';
import { GitReposService } from './git-repos.service';

class ReposFilter implements ClrDatagridStringFilterInterface<Repos> {
  accepts(repos: Repos, search: string): boolean {
    return '' + repos.node.name === search || repos.node.name.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'rps-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {
  reposPerPage = 5;
  currentPage = 1;
  userId: string;
  reposFilter = new ReposFilter();
  repos: any[];
  private reposSub: Subscription;
  private totalRepos: number;

  constructor(private gitReposService: GitReposService, private authService: AuthService) {
  }

  ngOnInit() {
    this.gitReposService.getRepos(this.reposPerPage, this.currentPage);
    this.reposSub = this.gitReposService
      .getReposListener()
      .subscribe((reposData: { repos: Repos[]; reposCount: number }) => {
        this.totalRepos = reposData.reposCount;
        this.repos = reposData.repos;
      });
    this.userId = this.authService.getUserId();
  }
}
