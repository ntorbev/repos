import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

import {environment} from '../../environments/environment';
import { Repos } from './git-repos.model';

const BACKEND_URL = environment.apiUrl + '/repos/';

@Injectable({providedIn: 'root'})
export class GitReposService {
  repos: [] = [];
  private repos$ = new Subject<{ repos: Repos[]; reposCount: number }>();

  constructor(private http: HttpClient, private router: Router) {
  }

  getReposCommits(repo: string): Observable<any> {
    return this.http.get<any>(`${BACKEND_URL}commits/${repo}`);
  }

  getReposDetails(repo: string): Observable<any> {
    return this.http.get<any>(`${BACKEND_URL}details/${repo}`);
  }

  getRepos(reposPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${reposPerPage}&page=${currentPage}`;
    this.http.get<any>(BACKEND_URL + queryParams)
      .pipe(
        map(reposData => {
          return {
            repos: reposData,
            maxRepos: reposData.length
          };
        })
      )
      .subscribe(transformedReposData => {
        this.repos = transformedReposData.repos;
        this.repos$.next({
          repos: [...this.repos],
          reposCount: transformedReposData.maxRepos
        });
      });
  }

  getReposListener() {
    return this.repos$.asObservable();
  }
}
