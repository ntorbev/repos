import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {GitReposService} from 'src/app/git-repos/git-repos.service';

@Injectable({
  providedIn: 'root'
})
export class ReposDetailsResolver implements Resolve<any> {

  constructor(private gitReposService: GitReposService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    return forkJoin(
      this.gitReposService.getReposDetails(route.queryParams['selectedRepo']),
      this.gitReposService.getReposCommits(route.queryParams['selectedRepo'])
    );
  }
}
