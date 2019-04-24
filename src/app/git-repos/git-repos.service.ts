import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

import {environment} from '../../environments/environment';
import {Respos} from 'src/app/git-repos/git-repos.model';

const BACKEND_URL = environment.apiUrl + '/repos/';

@Injectable({providedIn: 'root'})
export class GitReposService {
  private repos: Respos[] = [];
  private reposUpdated = new Subject<{ repos: Respos[]; reposCount: number }>();

  constructor(private http: HttpClient, private router: Router) {
  }

  getRepos(reposPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${reposPerPage}&page=${currentPage}`;
    this.http.get<{ message: string; repos: any; maxRepos: number }>(BACKEND_URL + queryParams)
      .pipe(
        map(reposData => {
          return {
            repos: reposData.repos.map(repos => {
              return repos;
            }),
            maxRepos: reposData.maxRepos
          };
        })
      )
      .subscribe(transformedPostData => {
        this.repos = transformedPostData.repos;
        this.reposUpdated.next({
          repos: [...this.repos],
          reposCount: transformedPostData.maxRepos
        });
      });
  }

  getPostUpdateListener() {
    return this.reposUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      content: string;
      imagePath: string;
      creator: string;
    }>(BACKEND_URL + id);
  }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);
    this.http
      .post<{ message: string; repos: Respos }>(
        BACKEND_URL,
        postData
      )
      .subscribe(responseData => {
        this.router.navigate(['/']);
      });
  }

  updatePost(id: string, title: string, content: string, image: File | string) {
    let postData: Respos | FormData;
    if (typeof image === 'object') {
      postData = new FormData();
      postData.append('id', id);
      postData.append('title', title);
      postData.append('content', content);
      postData.append('image', image, title);
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image,
        creator: null
      };
    }
    this.http
      .put(BACKEND_URL + id, postData)
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

  deletePost(postId: string) {
    return this.http.delete(BACKEND_URL + postId);
  }
}
