import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth/auth.service';
import {GitReposService} from 'src/app/git-repos/git-repos.service';

@Component({
  selector: 'rps-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {
  reposPerPage = 2;
  currentPage = 1;
  userId: string;

  constructor(private gitReposService: GitReposService, private authService: AuthService) {
  }

  ngOnInit() {
    this.gitReposService.getRepos(this.reposPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
  }
}
