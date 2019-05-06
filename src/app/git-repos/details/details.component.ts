import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClrDatagridStringFilterInterface} from '@clr/angular';
import {Repos} from 'src/app/git-repos/git-repos.model';
import {GitReposService} from 'src/app/git-repos/git-repos.service';

class ReposFilter implements ClrDatagridStringFilterInterface<Repos> {
  accepts(user: Repos, search: string): boolean {
    return '' + user.node.message === search || user.node.message.toLowerCase().includes(search);
  }
}
@Component({
  selector: 'rps-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  reposFilter = new ReposFilter();
  private repo: any;
  private readme: string;
  private commits: Repos[];

  constructor(public route: ActivatedRoute, private gitReposService: GitReposService) {
  }

  ngOnInit() {
    // this.commits = this.gitReposService.repos;
    this.repo = this.route.snapshot.queryParamMap.get('selectedRepo');
    this.commits = this.route.snapshot.data.readmeAndCommits[1].commits;
    this.readme = this.route.snapshot.data.readmeAndCommits[0].readme;
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   if (paramMap.has('selectedRepo')) {
    //     this.repo = paramMap.get('selectedRepo');
    //   }
    // });
  }

}
