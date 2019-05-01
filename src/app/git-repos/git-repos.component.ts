import {Component, OnInit} from '@angular/core';
import {ClrDatagridStringFilterInterface} from '@clr/angular';
import {Subscription} from 'rxjs';
import {AuthService} from 'src/app/auth/auth.service';
import {Repos} from 'src/app/git-repos/git-repos.model';
import {GitReposService} from 'src/app/git-repos/git-repos.service';

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
  reposPerPage = 2;
  currentPage = 1;
  userId: string;
  private reposFilter = new ReposFilter();
  private reposSub: Subscription;
  private repos: Repos[];
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
